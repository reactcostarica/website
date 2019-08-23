import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import SEO from 'components/seo'

export default function HomePage() {
  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Inicio" />
      <Box width="100%" maxWidth={512}>
        <Img fluid={logo.placeholderImage.childImageSharp.fluid} />
      </Box>
      <Typography variant="h6" component="h2">
        Próximamente...
      </Typography>
    </>
  )
}
