import { useState, useCallback, useMemo, useLayoutEffect } from 'react'

export default function useViewport() {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })
  const { width, height } = viewportSize

  const onResize = useCallback(() => {
    setViewportSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  const vw = useCallback((v: number) => (width * v) / 100, [width])
  const vh = useCallback((v: number) => (height * v) / 100, [height])

  useLayoutEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  return useMemo(
    () => ({
      width,
      height,
      vw,
      vh,
    }),
    [height, vh, vw, width]
  )
}
