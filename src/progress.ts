import type { ProgressState, ScenarioResult } from './types.ts'

const KEY = 'verhandlungssache.progress.v1'
const PREP_KEY = 'verhandlungssache.onesheet.v1'

const empty = (): ProgressState => ({
  completedDays: [],
  scenarioResults: {},
})

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    const parsed = JSON.parse(raw) as ProgressState
    return {
      completedDays: Array.isArray(parsed.completedDays) ? parsed.completedDays : [],
      scenarioResults: parsed.scenarioResults ?? {},
    }
  } catch {
    return empty()
  }
}

export function saveProgress(state: ProgressState): void {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function maxUnlockedDay(state: ProgressState, totalDays: number): number {
  if (state.completedDays.includes(0)) return totalDays
  const set = new Set(state.completedDays)
  let day = 1
  while (day <= totalDays && set.has(day)) day += 1
  return Math.min(day, totalDays)
}

export function isDayUnlocked(state: ProgressState, day: number, totalDays: number): boolean {
  return day <= maxUnlockedDay(state, totalDays)
}

export function completeDay(day: number): ProgressState {
  const state = loadProgress()
  if (!state.completedDays.includes(day)) {
    state.completedDays = [...state.completedDays, day].sort((a, b) => a - b)
    saveProgress(state)
  }
  return state
}

export function saveScenarioResult(result: ScenarioResult): ProgressState {
  const state = loadProgress()
  state.scenarioResults[result.id] = result
  saveProgress(state)
  return state
}

export function unlockAll(totalDays: number): ProgressState {
  const state = loadProgress()
  state.completedDays = Array.from({ length: totalDays }, (_, i) => i + 1)
  saveProgress(state)
  return state
}

export function resetProgress(): ProgressState {
  const state = empty()
  saveProgress(state)
  return state
}

export interface OneSheet {
  typ: string
  ziel: string
  meineInteressen: string
  ihreInteressen: string
  batna: string
  roteLinien: string
  labels: string
  fragen: string
  optionen: string
  coach: string
}

export const emptySheet = (): OneSheet => ({
  typ: '',
  ziel: '',
  meineInteressen: '',
  ihreInteressen: '',
  batna: '',
  roteLinien: '',
  labels: '',
  fragen: '',
  optionen: '',
  coach: '',
})

export function loadSheet(): OneSheet {
  try {
    const raw = localStorage.getItem(PREP_KEY)
    return raw ? { ...emptySheet(), ...(JSON.parse(raw) as OneSheet) } : emptySheet()
  } catch {
    return emptySheet()
  }
}

export function saveSheet(sheet: OneSheet): void {
  localStorage.setItem(PREP_KEY, JSON.stringify(sheet))
}
