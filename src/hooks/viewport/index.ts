import { useState, useEffect } from 'react'

export default function useViewport() {
  const [viewportSize, setViewportSize] = useState(getViewportSize())

  const vw = (v: number) => (viewportSize.width * v) / 100
  const vh = (v: number) => (viewportSize.height * v) / 100

  useEffect(() => {
    const onResize = () => setViewportSize(getViewportSize())
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return {
    vw,
    vh,
  }
}

function getViewportSize() {
  return {
    width: typeof window === 'undefined' ? 0 : window.innerWidth,
    height: typeof window === 'undefined' ? 0 : window.innerHeight,
  }
}
