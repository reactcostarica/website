import React from 'react'
import { motion } from 'framer-motion'

import Box from '@material-ui/core/Box'

import useViewport from 'hooks/viewport'

import Theme from './theme'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { vh } = useViewport()
  const viewportHeight = vh(100)

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <Theme>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={!viewportHeight ? 'hidden' : 'visible'}
      >
        <Box
          minHeight={viewportHeight}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          {children}
          <Footer />
        </Box>
      </motion.div>
    </Theme>
  )
}
