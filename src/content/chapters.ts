import type { Chapter } from '../types.ts'
import { alltagChapters } from './chapters-alltag.ts'
import { handwerkChapters } from './chapters-handwerk.ts'
import { kriseChapters } from './chapters-krise.ts'
import { staatChapters } from './chapters-staat.ts'

export const chapters: Chapter[] = [
  ...handwerkChapters,
  ...alltagChapters,
  ...kriseChapters,
  ...staatChapters,
]

export function chapterByDay(day: number): Chapter | undefined {
  return chapters.find((chapter) => chapter.day === day)
}
