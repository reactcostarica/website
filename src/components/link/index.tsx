import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'

// eslint-disable-next-line
export type LinkProps = MuiLinkProps & GatsbyLinkProps<any>

export default React.forwardRef(function Link(props: LinkProps, ref) {
  // @ts-ignore
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />
})
