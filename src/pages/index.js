import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HomepageHeader from '../components/HomepageHeader';
import SelectedWorks from '../components/SelectedWorks';

export default class IndexPage extends React.Component {
  render() {
    const {frontmatter, html} = this.props.data.allMarkdownRemark.edges[0].node;
    const {firstName, image, lastName, selectedWorks} = frontmatter
    return (
      <Layout>
        <HomepageHeader firstName={firstName} lastName={lastName} image={image} html={html} />
        <SelectedWorks selectedWorks={selectedWorks}/>
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
          html
          frontmatter {
            templateKey
            firstName
            lastName
            image
            selectedWorks
          }
        }
      }
    }
  }
`
