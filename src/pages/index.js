import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    console.log(this.props);

    return (
      <Layout>
        <div> This the homepage</div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homepage" } }}
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            firstName
            lastName
          }
        }
      }
    }
  }
`
