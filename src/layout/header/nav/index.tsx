import React from 'react'

import Box from '@material-ui/core/Box'

import Link, { LinkProps } from 'components/link'

export default function Nav() {
  return (
    <Box component="nav">
      <NavLink to="/meetups">Meetups</NavLink>
    </Box>
  )
}

function NavLink(props: LinkProps) {
  return (
    <Box px={2}>
      <Link variant="body2" color="inherit" {...props} />
    </Box>
  )
}
