import React from 'react'
import { Link, graphql } from 'gatsby'

export const query = graphql`
  query {
    allContentfulPost (
      sort: {
        fields: createdDate,
        order:DESC
      }
    ) {
      edges {
        node {
          title,
          slug,
          createdDate(
            # fromNow: true
            formatString:"MMMM Do, YYYY"
          )
        }
      }
    }
  }
`

const Contentful = (props) => {
  const nodeList = props.data.allContentfulPost.edges.map(node => node.node)
  return (
    <div>
      { nodeList.map(node => (
        <div key={node.title}>
          <Link to={`/blog/${node.slug}`}>
            { node.title } - { node.createdDate }
          </Link>
        </div>
      )) }
    </div>
  )
}

export default Contentful
