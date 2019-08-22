import React from 'react'
import styled from '@emotion/styled'

import Link from 'components/link'

const Container = styled.nav`
  display: flex;
  margin: 16px 0;
`

export default function Footer() {
  return (
    <>
      <Container>
        <Link primary href="https://github.com/reactcostarica">
          Github
        </Link>
        <Link primary href="https://twitter.com/reactcostarica">
          Twitter
        </Link>
      </Container>
      <Link href="mailto:hola@reactcostarica.com">hola@reactcostarica.com</Link>
    </>
  )
}
