import { BLOCKS } from './content/blocks.ts'
import { chapterByDay, chapters } from './content/chapters.ts'
import { glossary } from './content/glossary.ts'
import { scenarioById, scenarios } from './content/scenarios.ts'
import {
  clamp,
  escapeHtml,
  kindLabel,
  paragraphs,
  parseHash,
  qualityLabel,
  type Route,
} from './lib.ts'
import {
  completeDay,
  isDayUnlocked,
  loadProgress,
  loadSheet,
  maxUnlockedDay,
  resetProgress,
  saveScenarioResult,
  saveSheet,
  unlockAll,
  type OneSheet,
} from './progress.ts'
import type { Choice, ChoiceQuality, Scores, Scenario } from './types.ts'

const TOTAL_DAYS = chapters.length
const START_SCORES: Scores = { safety: 58, rapport: 42, info: 35, outcome: 40 }

interface PlayState {
  id: string
  turn: number
  scores: Scores
  counts: Record<ChoiceQuality, number>
  endedEarly: boolean
  last?: { choice: Choice }
  order: Choice[][]
}

let play: PlayState | null = null

function $(id: string): HTMLElement {
  const el = document.getElementById(id)
  if (!el) throw new Error(`#${id} fehlt`)
  return el
}

function go(path: string): void {
  window.location.hash = path
}

function nextDay(state = loadProgress()): number {
  const unlocked = maxUnlockedDay(state, TOTAL_DAYS)
  return state.completedDays.includes(unlocked) ? Math.min(unlocked + 1, TOTAL_DAYS) : unlocked
}

function shuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items]
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647
    const j = s % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function startPlay(scenario: Scenario): void {
  const seed = Date.now()
  play = {
    id: scenario.id,
    turn: 0,
    scores: { ...START_SCORES },
    counts: { pro: 0, plausible: 0, escalate: 0, trap: 0 },
    endedEarly: false,
    order: scenario.turns.map((turn, i) => shuffle(turn.choices, seed + i * 17)),
  }
}

function bar(label: string, value: number): string {
  const v = clamp(Math.round(value))
  return `<div class="bar">
    <div class="bar-meta"><span>${escapeHtml(label)}</span><span>${v}</span></div>
    <div class="bar-track"><div class="bar-fill" style="width:${v}%"></div></div>
  </div>`
}

function tabbar(active: string): string {
  const tabs = [
    { href: '#/', id: 'heute', label: 'Heute' },
    { href: '#/kapitel', id: 'kapitel', label: 'Kapitel' },
    { href: '#/lage', id: 'lage', label: 'Lage' },
    { href: '#/fortschritt', id: 'fortschritt', label: 'Stand' },
    { href: '#/glossar', id: 'glossar', label: 'Glossar' },
  ]
  const links = tabs
    .map(
      (tab) =>
        `<a href="${tab.href}" class="${tab.id === active ? 'active' : ''}">${tab.label}</a>`,
    )
    .join('')
  return `<nav id="tabbar" class="tabbar" aria-label="Hauptnavigation">${links}</nav>`
}

function renderHeute(): { title: string; tab: string; html: string } {
  const state = loadProgress()
  const day = nextDay(state)
  const chapter = chapterByDay(day)!
  const done = state.completedDays.length
  const scenario = chapter.scenarioId ? scenarioById(chapter.scenarioId) : undefined
  const scenarioDone = scenario ? Boolean(state.scenarioResults[scenario.id]) : false
  return {
    title: 'Heute',
    tab: 'heute',
    html: `<section class="hero-card">
      <p class="eyebrow">Tag ${chapter.day} · ${escapeHtml(chapter.duration)} · ${done}/${TOTAL_DAYS} abgeschlossen</p>
      <h2>${escapeHtml(chapter.title)}</h2>
      <p class="lede">${escapeHtml(chapter.goal)}</p>
      <div class="actions">
        <a class="btn primary" href="#/kapitel/${chapter.day}">Kapitel öffnen</a>
        ${
          scenario
            ? `<a class="btn ${scenarioDone ? '' : 'ghost'}" href="#/lage/${scenario.id}">Lagekammer${scenarioDone ? ' · nochmal' : ''}</a>`
            : ''
        }
      </div>
    </section>
    <section class="grid-blocks">
      ${BLOCKS.map((block) => {
        const days = chapters.filter((item) => item.block === block.id)
        const finished = days.filter((item) => state.completedDays.includes(item.day)).length
        return `<a class="block-card" href="#/kapitel/${days[0].day}">
          <span>${escapeHtml(block.days)}</span>
          <strong>${escapeHtml(block.label)}</strong>
          <em>${finished}/${days.length}</em>
          <p>${escapeHtml(block.blurb)}</p>
        </a>`
      }).join('')}
    </section>
    <p class="hint">Am iPhone: Teilen-Symbol → <strong>Zum Home-Bildschirm</strong>. Fortschritt bleibt in diesem Browser.</p>`,
  }
}

function renderKapitelListe(): { title: string; tab: string; html: string } {
  const state = loadProgress()
  const unlocked = maxUnlockedDay(state, TOTAL_DAYS)
  return {
    title: 'Kapitel',
    tab: 'kapitel',
    html: BLOCKS.map((block) => {
      const days = chapters.filter((item) => item.block === block.id)
      return `<section class="list-block">
        <h2>${escapeHtml(block.label)}</h2>
        <p class="muted">${escapeHtml(block.blurb)}</p>
        <ol class="day-list">
          ${days
            .map((item) => {
              const open = item.day <= unlocked
              const done = state.completedDays.includes(item.day)
              return `<li>
                <a class="${open ? '' : 'locked'}" href="${open ? `#/kapitel/${item.day}` : '#/kapitel'}">
                  <span class="num">${item.day}</span>
                  <span>
                    <strong>${escapeHtml(item.title)}</strong>
                    <em>${done ? 'Abgeschlossen' : open ? escapeHtml(item.duration) : 'Noch gesperrt'}</em>
                  </span>
                </a>
              </li>`
            })
            .join('')}
        </ol>
      </section>`
    }).join(''),
  }
}

function renderKapitel(day: number): { title: string; tab: string; html: string } {
  const state = loadProgress()
  if (!isDayUnlocked(state, day, TOTAL_DAYS)) {
    go('#/kapitel')
    return renderKapitelListe()
  }
  const chapter = chapterByDay(day)
  if (!chapter) {
    go('#/kapitel')
    return renderKapitelListe()
  }
  const done = state.completedDays.includes(day)
  const scenario = chapter.scenarioId ? scenarioById(chapter.scenarioId) : undefined
  return {
    title: `Tag ${chapter.day}`,
    tab: 'kapitel',
    html: `<article class="chapter">
      <p class="eyebrow">${escapeHtml(BLOCKS.find((b) => b.id === chapter.block)?.label ?? '')} · ${escapeHtml(chapter.duration)}</p>
      <h2>${escapeHtml(chapter.title)}</h2>
      <h3>Lagebild</h3>${paragraphs(chapter.situation)}
      <h3>Ziel</h3>${paragraphs(chapter.goal)}
      <h3>Kernmodell</h3>${paragraphs(chapter.model)}
      <h3>Taktiken</h3>
      <div class="tactics">
        ${chapter.tactics
          .map(
            (tactic) => `<section>
              <h4>${escapeHtml(tactic.name)}</h4>
              <p>${escapeHtml(tactic.how)}</p>
              <blockquote>${escapeHtml(tactic.say)}</blockquote>
            </section>`,
          )
          .join('')}
      </div>
      <h3>Fallstricke</h3>
      <ul>${chapter.pitfalls.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      <h3>Alltag</h3>${paragraphs(chapter.everydayBridge)}
      <h3>Drill</h3>${paragraphs(chapter.drill)}
      ${chapter.helpNote ? `<aside class="help">${paragraphs(chapter.helpNote)}</aside>` : ''}
      <div class="actions sticky-actions">
        ${
          done
            ? `<p class="muted">Tag ${chapter.day} ist abgehakt.</p>`
            : `<button class="btn primary" data-complete="${chapter.day}">Tag ${chapter.day} abschließen</button>`
        }
        ${
          scenario
            ? `<a class="btn ghost" href="#/lage/${scenario.id}">${escapeHtml(scenario.title)} spielen</a>`
            : day < TOTAL_DAYS
              ? `<a class="btn ghost" href="#/kapitel/${day + 1}">Nächster Tag</a>`
              : ''
        }
      </div>
    </article>`,
  }
}

function renderLageListe(): { title: string; tab: string; html: string } {
  const state = loadProgress()
  const unlocked = maxUnlockedDay(state, TOTAL_DAYS)
  return {
    title: 'Lagekammer',
    tab: 'lage',
    html: `<p class="lede">Kein Trivia. Du sprichst. Danach sagt der Coach, welche Taktik saß.</p>
    <ol class="scenario-list">
      ${scenarios
        .map((scenario) => {
          const reallyOpen = scenario.unlockDay <= unlocked
          const result = state.scenarioResults[scenario.id]
          return `<li>
            <a class="${reallyOpen ? '' : 'locked'}" href="${reallyOpen ? `#/lage/${scenario.id}` : '#/lage'}">
              <span class="tag">${escapeHtml(kindLabel(scenario.kind))}</span>
              <strong>${escapeHtml(scenario.title)}</strong>
              <em>${reallyOpen ? (result ? `Zuletzt gespielt · Rapport ${Math.round(result.scores.rapport)}` : `Ab Tag ${scenario.unlockDay}`) : `Sperrt bis Tag ${scenario.unlockDay}`}</em>
            </a>
          </li>`
        })
        .join('')}
    </ol>`,
  }
}

function scoreboard(scores: Scores): string {
  return `<div class="scores">
    ${bar('Sicherheit', scores.safety)}
    ${bar('Rapport', scores.rapport)}
    ${bar('Information', scores.info)}
    ${bar('Ergebnis', scores.outcome)}
  </div>`
}

function renderDebrief(scenario: Scenario, state: PlayState): string {
  const turn = scenario.turns[state.turn]
  const choice = state.last?.choice
  if (!choice) return ''
  return `<section class="debrief ${choice.quality}">
    <p class="eyebrow">${escapeHtml(qualityLabel(choice.quality))}${choice.tactic ? ` · ${escapeHtml(choice.tactic)}` : ''}</p>
    <p>${escapeHtml(choice.debrief)}</p>
    ${scoreboard(state.scores)}
    <button class="btn primary" data-advance="1">${
      state.endedEarly || state.turn >= scenario.turns.length - 1 ? 'Abschluss' : 'Nächster Zug'
    }</button>
  </section>
  <section class="speech muted-card">
    <p class="eyebrow">${escapeHtml(turn.speaker)}</p>
    <p>${escapeHtml(turn.line)}</p>
  </section>`
}

function renderTurn(scenario: Scenario, state: PlayState): string {
  const turn = scenario.turns[state.turn]
  const options = state.order[state.turn]
  return `${scoreboard(state.scores)}
    <section class="speech">
      <p class="eyebrow">Zug ${state.turn + 1}/${scenario.turns.length} · ${escapeHtml(turn.speaker)}</p>
      <p class="quote">${escapeHtml(turn.line)}</p>
    </section>
    <div class="choices">
      ${options
        .map(
          (choice, index) =>
            `<button class="choice" data-choice="${index}">${escapeHtml(choice.text)}</button>`,
        )
        .join('')}
    </div>`
}

function renderFinish(scenario: Scenario, state: PlayState): string {
  const total = Object.values(state.counts).reduce((a, b) => a + b, 0) || 1
  return `<section class="hero-card">
    <p class="eyebrow">${state.endedEarly ? 'Lage beendet' : 'Debrief'}</p>
    <h2>${escapeHtml(scenario.title)}</h2>
    ${scoreboard(state.scores)}
    <p>${state.counts.pro} Profi-Züge · ${state.counts.plausible} mittel · ${state.counts.trap} Fallen · ${state.counts.escalate} Eskalationen <span class="muted">(${total} Züge)</span></p>
    <div class="closing">${paragraphs(scenario.closing)}</div>
    <div class="actions">
      <a class="btn primary" href="#/lage">Zur Lagekammer</a>
      <button class="btn ghost" data-replay="${scenario.id}">Nochmal</button>
    </div>
  </section>`
}

function renderLage(id: string): { title: string; tab: string; html: string } {
  const scenario = scenarioById(id)
  const progress = loadProgress()
  if (!scenario || scenario.unlockDay > maxUnlockedDay(progress, TOTAL_DAYS)) {
    go('#/lage')
    return renderLageListe()
  }
  if (!play || play.id !== scenario.id) {
    return {
      title: scenario.title,
      tab: 'lage',
      html: `<section class="briefing">
        <p class="eyebrow">${escapeHtml(kindLabel(scenario.kind))} · ab Tag ${scenario.unlockDay}</p>
        <h2>${escapeHtml(scenario.title)}</h2>
        <h3>Lage</h3>${paragraphs(scenario.briefing.lage)}
        <h3>Akteure</h3>${paragraphs(scenario.briefing.actors)}
        <h3>Bekannt</h3><ul>${scenario.briefing.facts.map((f) => `<li>${escapeHtml(f)}</li>`).join('')}</ul>
        <h3>Auftrag</h3>${paragraphs(scenario.briefing.mission)}
        <div class="actions">
          <button class="btn primary" data-start="${scenario.id}">Lage beginnen</button>
          <a class="btn ghost" href="#/lage">Zurück</a>
        </div>
      </section>`,
    }
  }
  if (play.last) {
    return { title: scenario.title, tab: 'lage', html: renderDebrief(scenario, play) }
  }
  if (play.endedEarly || play.turn >= scenario.turns.length) {
    return { title: scenario.title, tab: 'lage', html: renderFinish(scenario, play) }
  }
  return { title: scenario.title, tab: 'lage', html: renderTurn(scenario, play) }
}

function sheetFields(): { key: keyof OneSheet; label: string }[] {
  return [
    { key: 'typ', label: 'Typ (instrumentell / expressiv)' },
    { key: 'ziel', label: 'Zielhierarchie in einem Satz' },
    { key: 'meineInteressen', label: 'Meine Interessen' },
    { key: 'ihreInteressen', label: 'Ihre vermuteten Interessen' },
    { key: 'batna', label: 'BATNA / WATNA beider Seiten' },
    { key: 'roteLinien', label: 'Rote Linien' },
    { key: 'labels', label: '3 Labels / Accusation Audit' },
    { key: 'fragen', label: '5 kalibrierte Fragen' },
    { key: 'optionen', label: 'Optionen jenseits des Preises' },
    { key: 'coach', label: 'Coach / Debrief-Slot' },
  ]
}

function renderFortschritt(): { title: string; tab: string; html: string } {
  const state = loadProgress()
  const sheet = loadSheet()
  const done = state.completedDays.length
  return {
    title: 'Stand',
    tab: 'fortschritt',
    html: `<section class="hero-card">
      <p class="eyebrow">21-Tage-Pfad</p>
      <h2>${done} von ${TOTAL_DAYS} Tagen</h2>
      ${bar('Curriculum', (done / TOTAL_DAYS) * 100)}
      <p class="muted">${Object.keys(state.scenarioResults).length} Lagen gespielt. Fortschritt liegt nur auf diesem iPhone/Browser.</p>
      <div class="actions">
        <button class="btn ghost" data-unlock="1">Alle Tage öffnen</button>
        <button class="btn danger" data-reset="1">Zurücksetzen</button>
      </div>
    </section>
    <section class="chapter">
      <h3>One-Sheet</h3>
      <p class="muted">Eine Seite vor dem nächsten echten Gespräch. Wird hier gespeichert.</p>
      <form id="onesheet" class="sheet">
        ${sheetFields()
          .map(
            (field) => `<label>${escapeHtml(field.label)}
              <textarea name="${field.key}" rows="2">${escapeHtml(sheet[field.key])}</textarea>
            </label>`,
          )
          .join('')}
        <button class="btn primary" type="submit">One-Sheet speichern</button>
      </form>
    </section>`,
  }
}

function renderGlossar(): { title: string; tab: string; html: string } {
  return {
    title: 'Glossar',
    tab: 'glossar',
    html: `<dl class="glossary">
      ${glossary
        .map(
          (entry) =>
            `<div><dt>${escapeHtml(entry.term)}</dt><dd>${escapeHtml(entry.body)}</dd></div>`,
        )
        .join('')}
    </dl>
    <aside class="help">
      <p>Kein Einsatzhandbuch. Bei suizidaler Krise: Telefonseelsorge 0800 111 0 111 / 0800 111 0 222. Akute Gefahr: 112 oder 110.</p>
    </aside>`,
  }
}

function viewFor(route: Route): { title: string; tab: string; html: string } {
  switch (route.name) {
    case 'heute':
      return renderHeute()
    case 'kapitel-liste':
      return renderKapitelListe()
    case 'kapitel':
      return renderKapitel(route.day)
    case 'lage-liste':
      return renderLageListe()
    case 'lage':
      return renderLage(route.id)
    case 'fortschritt':
      return renderFortschritt()
    case 'glossar':
      return renderGlossar()
  }
}

function paint(): void {
  const route = parseHash(window.location.hash)
  const view = viewFor(route)
  $('title').textContent = view.title
  $('view').innerHTML = view.html
  $('tabbar').outerHTML = tabbar(view.tab)
  document.querySelectorAll('.tabbar a').forEach((link) => {
    if (link instanceof HTMLAnchorElement && link.classList.contains('active')) {
      link.setAttribute('aria-current', 'page')
    }
  })
  $('view').scrollTop = 0
  window.scrollTo(0, 0)
}

function applyChoice(index: number): void {
  if (!play) return
  const scenario = scenarioById(play.id)
  if (!scenario) return
  const choice = play.order[play.turn][index]
  if (!choice) return
  play.counts[choice.quality] += 1
  play.scores = {
    safety: clamp(play.scores.safety + choice.delta.safety),
    rapport: clamp(play.scores.rapport + choice.delta.rapport),
    info: clamp(play.scores.info + choice.delta.info),
    outcome: clamp(play.scores.outcome + choice.delta.outcome),
  }
  play.last = { choice }
  if (choice.endsLage || play.scores.safety <= 0) play.endedEarly = true
  paint()
}

function advancePlay(): void {
  if (!play) return
  const scenario = scenarioById(play.id)
  if (!scenario) return
  play.last = undefined
  if (play.endedEarly || play.turn >= scenario.turns.length - 1) {
    play.turn = scenario.turns.length
    saveScenarioResult({
      id: scenario.id,
      scores: play.scores,
      qualityCounts: play.counts,
      endedEarly: play.endedEarly,
      completedAt: new Date().toISOString(),
    })
  } else {
    play.turn += 1
  }
  paint()
}

export function boot(): void {
  paint()
  window.addEventListener('hashchange', paint)
  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    const complete = target.closest<HTMLElement>('[data-complete]')
    if (complete?.dataset.complete) {
      completeDay(Number(complete.dataset.complete))
      paint()
      return
    }
    const start = target.closest<HTMLElement>('[data-start]')
    if (start?.dataset.start) {
      const scenario = scenarioById(start.dataset.start)
      if (scenario) startPlay(scenario)
      paint()
      return
    }
    const choice = target.closest<HTMLElement>('[data-choice]')
    if (choice?.dataset.choice) {
      applyChoice(Number(choice.dataset.choice))
      return
    }
    if (target.closest('[data-advance]')) {
      advancePlay()
      return
    }
    const replay = target.closest<HTMLElement>('[data-replay]')
    if (replay?.dataset.replay) {
      const scenario = scenarioById(replay.dataset.replay)
      if (scenario) startPlay(scenario)
      paint()
      return
    }
    if (target.closest('[data-unlock]')) {
      unlockAll(TOTAL_DAYS)
      paint()
      return
    }
    if (target.closest('[data-reset]')) {
      if (window.confirm('Fortschritt und Lage-Ergebnisse löschen?')) {
        play = null
        resetProgress()
        paint()
      }
    }
  })
  document.addEventListener('submit', (event) => {
    const form = event.target
    if (!(form instanceof HTMLFormElement) || form.id !== 'onesheet') return
    event.preventDefault()
    const data = new FormData(form)
    const sheet = loadSheet()
    for (const field of sheetFields()) {
      sheet[field.key] = String(data.get(field.key) ?? '')
    }
    saveSheet(sheet)
    paint()
  })
}
