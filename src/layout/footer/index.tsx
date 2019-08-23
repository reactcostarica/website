import React from 'react'

import Box from '@material-ui/core/Box'

import Link from '@material-ui/core/Link'

export default function Footer() {
  return (
    <Box
      component="footer"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box component="nav" display="flex" my={2} alignItems="center">
        <Link href="https://github.com/reactcostarica">GitHub</Link>
        <Box
          mx={2}
          width={5}
          height={5}
          bgcolor="secondary"
          borderRadius="50%"
        />
        <Link href="https://twitter.com/reactcostarica">Twitter</Link>
      </Box>

      <Link color="textSecondary" href="mailto:hola@reactcostarica.com">
        hola@reactcostarica.com
      </Link>
    </Box>
  )
}
