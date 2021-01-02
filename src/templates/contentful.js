import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      createdDate(
        formatString: "MMM Do, YYYY"
      )
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file } = node.data.target.fields;
        const { url } = file["en-US"];
        return <img src={`http:${url}`} alt="test" />;
      }
    }
  }

  console.log('props.data.contentfulPost', props.data.contentfulPost.body.json)

  return (
    <Layout>
      <h1>{props.data.contentfulPost.title}</h1>
      <p>{props.data.contentfulPost.createdDate}</p>
      <div>
        { documentToReactComponents(props.data.contentfulPost.body.json, options) }
      </div>
    </Layout>
  )
}

export default Blog
