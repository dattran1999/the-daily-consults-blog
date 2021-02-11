import React from 'react';
import { graphql } from 'gatsby';

import AllPostsByTopic from '../components/allPostsByTopic';
import Layout from '../components/layout';
import Section from '../components/section';

const RecentlyUpload = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMediumPost.nodes;
  const logo = data.file.childImageSharp.fluid

  return (
    <Layout title={siteTitle} logo={logo}>
      <Section>
        <AllPostsByTopic posts={posts} topicTitle='Recently Upload' titleColor='var(--black)' />
      </Section>
    </Layout>
  )
}

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
  }
`

export default RecentlyUpload;
