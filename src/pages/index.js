import React from "react"
import { graphql } from "gatsby"

import Testimonials from '../components/testimonials'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsByTopic from "../components/postsByTopic"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <PostsByTopic topicTitle="Recently Upload" titleColor="black" posts={posts} />
      <Testimonials />
      <PostsByTopic topicTitle="Marketing" titleColor="yellow" posts={posts} />
      <PostsByTopic topicTitle="Sales" titleColor="orange" posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
