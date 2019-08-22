import React from 'react'

import Box from 'components/box'
import Link from 'components/link'

const Container = Box.withComponent('footer')
const Links = Box.withComponent('nav')

export default function Footer() {
  return (
    <Container display="flex" flexDirection="column" alignItems="center">
      <Links display="flex" my={2} alignItems="center">
        <Link href="https://github.com/reactcostarica">GitHub</Link>
        <Box mx={2} width={5} height={5} bg="secondary" borderRadius="50%" />
        <Link href="https://twitter.com/reactcostarica">Twitter</Link>
      </Links>

      <Link secondary href="mailto:hola@reactcostarica.com">
        hola@reactcostarica.com
      </Link>
    </Container>
  )
}
