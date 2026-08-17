export type BlockId = 'handwerk' | 'alltag' | 'krise' | 'staat'

export type ScenarioKind = 'alltag' | 'krise' | 'staat' | 'mix'

export type ChoiceQuality = 'pro' | 'plausible' | 'escalate' | 'trap'

export interface Tactic {
  name: string
  how: string
  say: string
}

export interface Chapter {
  day: number
  title: string
  block: BlockId
  duration: string
  situation: string
  goal: string
  model: string
  tactics: Tactic[]
  pitfalls: string[]
  drill: string
  everydayBridge: string
  helpNote?: string
  scenarioId?: string
}

export interface ScoreDelta {
  safety: number
  rapport: number
  info: number
  outcome: number
}

export interface Choice {
  text: string
  quality: ChoiceQuality
  delta: ScoreDelta
  debrief: string
  tactic?: string
  endsLage?: boolean
}

export interface Turn {
  speaker: string
  line: string
  choices: [Choice, Choice, Choice, Choice]
}

export interface Scenario {
  id: string
  title: string
  unlockDay: number
  kind: ScenarioKind
  briefing: {
    lage: string
    actors: string
    facts: string[]
    mission: string
  }
  turns: Turn[]
  closing: string
}

export interface Scores {
  safety: number
  rapport: number
  info: number
  outcome: number
}

export interface ScenarioResult {
  id: string
  scores: Scores
  qualityCounts: Record<ChoiceQuality, number>
  endedEarly: boolean
  completedAt: string
}

export interface ProgressState {
  completedDays: number[]
  scenarioResults: Record<string, ScenarioResult>
}
