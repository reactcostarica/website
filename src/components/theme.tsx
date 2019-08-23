import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'
import normalize from 'emotion-normalize'

import theme from 'config/theme'

interface ThemeProps {
  children: React.ReactNode
}

export default function Theme({ children }: ThemeProps) {
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

      {children}
    </ThemeProvider>
  )
}
