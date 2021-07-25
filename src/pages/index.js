import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero';
import AllPosts from '../components/allPosts';
import SubcribeModal from "../components/subcribeModal";

import { SubscribeModalProvider } from '../context/modal';

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMediumPost.nodes
  const logo = data.file.childImageSharp.fluid


  return (
    <SubscribeModalProvider>
      <Layout title={siteTitle} logo={logo}>
        <SEO title="All posts" />
        <Hero posts={posts} />
        {/* <Testimonials /> */}
        <AllPosts posts={posts} />
        <SubcribeModal title={siteTitle} />
      </Layout>
    </SubscribeModalProvider>
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
    allMediumPost(sort: {fields: createdAt, order: DESC}) {
      nodes {
        title
        updatedAt(formatString: "DD/MM/YYYY")
        content {
          subtitle
        }
        virtuals {
          previewImage {
            imageId
          }
          tags {
            name
          }
          totalClapCount
        }
        uniqueSlug
      }
    }
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   nodes {
    #     excerpt
    #     fields {
    #       slug
    #     }
    #     frontmatter {
    #       date(formatString: "MMMM DD, YYYY")
    #       title
    #       description
    #       featuredImage {
    #         alt
    #         src {
    #           childImageSharp {
    #             fluid(maxWidth: 1024) {
    #               ...GatsbyImageSharpFluid
    #             }
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
  }
`
