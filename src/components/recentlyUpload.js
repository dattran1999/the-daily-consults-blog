import React from 'react';
import Section from './section';
import PostCard from './postCard';
import Flex from './flex';

const RecentlyUpload = ({ posts }) => {
  const noPostMessage = (
    <p>
      No blog posts found. Add markdown posts to "content/blog" (or the
      directory you specified for the "gatsby-source-filesystem" plugin in
      gatsby-config.js).
    </p>
  )

  const postWrapper = (post, type) => {
    let postStyle;
    if (type === 'primary') {
      postStyle = { height: '100%' }
    }
    else {
      postStyle = { height: '50%' }
    }
    return (
      <PostCard
        style={postStyle}
        title={post.frontmatter.title}
        featureImage={post.frontmatter.featureImage}
        slug={post.fields.slug}
        date={post.frontmatter.date}
        description={post.frontmatter.description}
      />
    )
  }

  const postList = (
    <ol style={{ listStyle: `none` }}>
      <Flex direction="row" valign='center'>
        <Flex style={{ width: '50%', height: '100%' }}>
          {postWrapper(posts[0], 'primary')}
        </Flex>
        <Flex direction="column" style={{ width: '50%', height: '100%' }}>
          {postWrapper(posts[1], 'secondary')}
          {postWrapper(posts[2], 'secondary')}
        </Flex>
      </Flex>
    </ol>
  )
  return (
    <Section>
      {posts.length === 0 ? noPostMessage : postList}
    </Section>
  )
}

export default RecentlyUpload
