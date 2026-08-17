import type { Scenario } from '../types.ts'
import { alltagScenarios } from './scenarios-alltag.ts'
import { kriseScenarios } from './scenarios-krise.ts'
import { staatScenarios } from './scenarios-staat.ts'

export const scenarios: Scenario[] = [
  ...alltagScenarios,
  ...kriseScenarios,
  ...staatScenarios,
]

export function scenarioById(id: string): Scenario | undefined {
  return scenarios.find((scenario) => scenario.id === id)
}

export function scenariosForUnlock(maxCompletedDay: number): Scenario[] {
  return scenarios.filter((scenario) => scenario.unlockDay <= maxCompletedDay)
}
