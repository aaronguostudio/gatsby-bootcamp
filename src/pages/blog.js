import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const Blog = () => {

  const { allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log('edges', edges)

  const blogListTitles = edges.map(edge => edge.node.title)

  const renderBlogList = () => (
    blogListTitles.map(title => <div key={title}>{title}</div>)
  )

  return (
    <Layout>
      <div>Blog</div>
      { renderBlogList() }
    </Layout>
  )
}

export default Blog
