import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import normalize from 'emotion-normalize'
import { motion } from 'framer-motion'

import useViewport from 'hooks/viewport'
import theme from 'config/theme'
import Box from 'components/box'
import Footer from './footer'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { vh } = useViewport()
  const viewportHeight = vh(100)

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }
        `}
      />

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
    </ThemeProvider>
  )
}
