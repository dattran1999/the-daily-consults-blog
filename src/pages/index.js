import React from "react"
import { graphql } from "gatsby"

import Testimonials from '../components/testimonials'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero';
import AllPosts from '../components/allPosts';
import ModalWrapper from "../components/modal"
import Subcribe from "../components/subcribe"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const logo = data.file.childImageSharp.fluid

  const [showSubscribeModal, setShowSubscribeModal] = React.useState(false);

  return (
    <Layout location={location} title={siteTitle} logo={logo}>
      <SEO title="All posts" />
      <Hero posts={posts} />
      <Testimonials />
      <AllPosts posts={posts} />
      <button onClick={() => setShowSubscribeModal(true)}>show</button>
      <ModalWrapper backgroundColor={'var(--yellow)'} showModal={showSubscribeModal} setShowModal={setShowSubscribeModal}>
        <Subcribe title={siteTitle} />
      </ModalWrapper>
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
