import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import normalize from 'emotion-normalize'

import Footer from './footer'

interface AppLayoutProps {
  children: React.ReactNode
}

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 16px;
`

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
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
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  )
}
