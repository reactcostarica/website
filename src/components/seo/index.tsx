import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title: string
  description?: string
}

export default function SEO({ title, description }: SEOProps) {
  const { siteTitle, meta } = useSiteData(title, description)

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      htmlAttributes={{ lang: 'es' }}
      meta={meta}
    />
  )
}

function useSiteData(title: string, description?: string) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const meta = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ]

  return {
    siteTitle: site.siteMetadata.title,
    meta,
  }
}
