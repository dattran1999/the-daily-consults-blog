import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import AllPostsByTopic from '../components/allPostsByTopic';
import Layout from '../components/layout';
import Section from '../components/section';

import { filterPostByTag } from '../utils/filter';

const index = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMediumPost.nodes;
  const logo = data.file.childImageSharp.fluid
  const InANutShellPosts = posts.filter(post => filterPostByTag(post, "Strategy"));

  return (
    <Layout title={siteTitle} logo={logo}>
      <SEO title='In a Nutshell Series' />
      <Section>
        <AllPostsByTopic
          posts={InANutShellPosts}
          topicTitle='In a Nutshell Series'
          titleColor='var(--fuschia)'
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

export default index;
