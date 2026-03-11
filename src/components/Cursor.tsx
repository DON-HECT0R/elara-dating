import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    let rafId: number
    let ringTimeout: ReturnType<typeof setTimeout>

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = e.clientX + 'px'
          cursor.style.top = e.clientY + 'px'
        }
      })
      clearTimeout(ringTimeout)
      ringTimeout = setTimeout(() => {
        if (ring) {
          ring.style.left = e.clientX + 'px'
          ring.style.top = e.clientY + 'px'
        }
      }, 60)
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      clearTimeout(ringTimeout)
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
