import type { Choice, ChoiceQuality, ScoreDelta } from '../types.ts'

const BASE: Record<ChoiceQuality, ScoreDelta> = {
  pro: { safety: 8, rapport: 12, info: 10, outcome: 8 },
  plausible: { safety: 2, rapport: 3, info: 3, outcome: 1 },
  escalate: { safety: -20, rapport: -14, info: -6, outcome: -12 },
  trap: { safety: -6, rapport: -8, info: -4, outcome: -14 },
}

export function choice(
  quality: ChoiceQuality,
  text: string,
  debrief: string,
  extra: { tactic?: string; endsLage?: boolean; delta?: Partial<ScoreDelta> } = {},
): Choice {
  return {
    text,
    quality,
    debrief,
    tactic: extra.tactic,
    endsLage: extra.endsLage,
    delta: { ...BASE[quality], ...extra.delta },
  }
}

export const pro = (
  text: string,
  debrief: string,
  tactic: string,
  delta?: Partial<ScoreDelta>,
): Choice => choice('pro', text, debrief, { tactic, delta })

export const ok = (text: string, debrief: string, delta?: Partial<ScoreDelta>): Choice =>
  choice('plausible', text, debrief, { delta })

export const hot = (
  text: string,
  debrief: string,
  extra: { endsLage?: boolean; delta?: Partial<ScoreDelta> } = {},
): Choice => choice('escalate', text, debrief, extra)

export const trap = (text: string, debrief: string, delta?: Partial<ScoreDelta>): Choice =>
  choice('trap', text, debrief, { delta })
