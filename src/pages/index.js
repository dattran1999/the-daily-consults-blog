import React from "react"
import { graphql } from "gatsby"

import Testimonials from '../components/testimonials'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero';
import AllPosts from '../components/allPosts';
import SubcribeModal from "../components/subcribeModal";

import { ModalProvider } from '../context/modal';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const logo = data.file.childImageSharp.fluid


  return (
    <ModalProvider>
      <Layout location={location} title={siteTitle} logo={logo}>
        <SEO title="All posts" />
        <Hero posts={posts} />
        <Testimonials />
        <AllPosts posts={posts} />
        <SubcribeModal title={siteTitle} />
      </Layout>
    </ModalProvider>
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
    file(absolutePath: { regex: "/logo.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
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
