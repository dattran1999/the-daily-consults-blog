import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import AllPostsByTopic from '../components/allPostsByTopic';
import Layout from '../components/layout';
import Section from '../components/section';

import { filterPostByTag } from '../utils/filter';

const ValueCreationSeriesPosts = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMediumPost.nodes;
  const logo = data.file.childImageSharp.fluid
  const ValueCreationPosts = posts.filter(post => filterPostByTag(post, "Value Creation"));

  return (
    <Layout title={siteTitle} logo={logo}>
      <SEO title='Value Creation Series' />
      <Section>
        <AllPostsByTopic
          posts={ValueCreationPosts}
          topicTitle='Value Creation Series'
          titleColor='var(--blue)'
        />
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

export default ValueCreationSeriesPosts;
