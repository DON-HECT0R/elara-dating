import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} — ELARA Dating` : 'ELARA — Rencontres d\'exception'
    return () => { document.title = prev }
  }, [title])
}
