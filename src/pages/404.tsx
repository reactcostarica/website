import React from 'react'

import Typography from '@material-ui/core/Typography'

import SEO from 'components/seo'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404" />
      <Typography variant="h6" component="h2">
        404
      </Typography>
    </>
  )
}
