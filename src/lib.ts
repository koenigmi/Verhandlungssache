export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function paragraphs(text: string): string {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join('')
}

export type Route =
  | { name: 'heute' }
  | { name: 'kapitel-liste' }
  | { name: 'kapitel'; day: number }
  | { name: 'lage-liste' }
  | { name: 'lage'; id: string }
  | { name: 'fortschritt' }
  | { name: 'glossar' }

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '').replace(/^\/+/, '')
  const parts = raw.split('/').filter(Boolean)
  if (parts.length === 0) return { name: 'heute' }
  if (parts[0] === 'kapitel' && !parts[1]) return { name: 'kapitel-liste' }
  if (parts[0] === 'kapitel' && parts[1]) {
    const day = Number(parts[1])
    return Number.isFinite(day) ? { name: 'kapitel', day } : { name: 'kapitel-liste' }
  }
  if (parts[0] === 'lage' && !parts[1]) return { name: 'lage-liste' }
  if (parts[0] === 'lage' && parts[1]) return { name: 'lage', id: decodeURIComponent(parts[1]) }
  if (parts[0] === 'fortschritt') return { name: 'fortschritt' }
  if (parts[0] === 'glossar') return { name: 'glossar' }
  return { name: 'heute' }
}

export function kindLabel(kind: string): string {
  switch (kind) {
    case 'alltag':
      return 'Alltag'
    case 'krise':
      return 'Kritische Lage'
    case 'staat':
      return 'Staat'
    default:
      return 'Mix'
  }
}

export function qualityLabel(quality: string): string {
  switch (quality) {
    case 'pro':
      return 'Profi-Zug'
    case 'plausible':
      return 'Geht so'
    case 'escalate':
      return 'Eskalation'
    default:
      return 'Falle'
  }
}

export function clamp(value: number, min = 0, max = 100): number {
  return Math.min(max, Math.max(min, value))
}
