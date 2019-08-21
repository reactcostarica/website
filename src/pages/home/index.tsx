import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from 'components/seo'

const Logo = styled(Img)`
  max-width: 512px;
  width: 100%;
`

export default function HomePage() {
  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Inicio" />
      <Logo fluid={logo.placeholderImage.childImageSharp.fluid} />
      <h1>Próximamente</h1>
    </>
  )
}
