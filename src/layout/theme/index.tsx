import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'config/theme'

interface ThemeProps {
  children: React.ReactNode
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
