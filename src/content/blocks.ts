import type { BlockId } from '../types.ts'

export interface BlockMeta {
  id: BlockId
  label: string
  days: string
  blurb: string
}

export const BLOCKS: BlockMeta[] = [
  {
    id: 'handwerk',
    label: 'Block A · Handwerk',
    days: 'Tage 1–7',
    blurb: 'Zuhören, Empathie, Interessen, BATNA. Das Werkzeug, das Profis in jeder Lage zuerst ziehen.',
  },
  {
    id: 'alltag',
    label: 'Block B · Alltag',
    days: 'Tage 8–12',
    blurb: 'Gehalt, Kauf, Miete, Job. Dieselben Taktiken, diesmal am Küchentisch und im Autohaus.',
  },
  {
    id: 'krise',
    label: 'Block C · Kritische Lage',
    days: 'Tage 13–17',
    blurb: 'Geisel, Verbarrikadierung, suizidale Krise. Containment vor Lösung. Leben vor Deal.',
  },
  {
    id: 'staat',
    label: 'Block D · Staat & Prüfung',
    days: 'Tage 18–21',
    blurb: 'Waffenstillstand, Frieden, Verträge unter Druck. Dann die Abschluss-Lagekammer.',
  },
]
