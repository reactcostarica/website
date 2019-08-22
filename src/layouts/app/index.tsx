import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import normalize from 'emotion-normalize'

import useViewport from 'hooks/viewport'
import theme from 'config/theme'
import Box from 'components/box'
import Footer from './footer'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { vh } = useViewport()

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
      <Box
        minHeight={vh(100)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
