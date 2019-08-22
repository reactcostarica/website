import { useState, useLayoutEffect } from 'react'

export default function useViewport() {
  const [viewportSize, setViewportSize] = useState(getViewportSize())

  const vw = (v: number) => (viewportSize.width * v) / 100
  const vh = (v: number) => (viewportSize.height * v) / 100

  useLayoutEffect(() => {
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
    width: window.innerWidth,
    height: window.innerHeight,
  }
}
