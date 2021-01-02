import { graphql, useStaticQuery } from 'gatsby'

export const meta = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title, description, author
      }
    }
  }
`)
