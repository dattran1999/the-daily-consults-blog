import React from 'react';
import Section from './section';
import PostCard from './postCard';
import Flex from './flex';

const ThreePosts = ({ posts, column = false }) => {
  // TODO: more responsive by not needing to refresh
  const mediaQueryList = window.matchMedia('(max-width: 28rem)');
  let mobileView = mediaQueryList.matches;

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
      postStyle = { flex: '1' }
    }
    else {
      postStyle = {}
    }

    const description = column ? "" : post.frontmatter.description;

    return (
      <PostCard
        style={postStyle}
        title={post.frontmatter.title}
        featureImage={post.frontmatter.featureImage}
        slug={post.fields.slug}
        date={post.frontmatter.date}
        description={description}
      />
    )
  }

  const postListDesktop = (
    <ol style={{ listStyle: `none` }}>
      <Flex direction="row" halign='space-between' style={{ flexWrap: 'wrap' }}>
        <Flex style={{ height: '100%', flex: '2' }}>
          {postWrapper(posts[0], 'primary')}
        </Flex>
        <Flex direction="column" style={{ flex: '1' }}>
          {postWrapper(posts[1], 'secondary')}
          {postWrapper(posts[2], 'secondary')}
        </Flex>
      </Flex>
    </ol>
  )
  const postListMobile = (
    <ol style={{ listStyle: `none` }}>
      <Flex direction="column" valign='center'>
        {postWrapper(posts[0], 'primary')}
        {postWrapper(posts[1], 'primary')}
        {postWrapper(posts[2], 'primary')}
      </Flex>
    </ol>
  )
  return (
    <Section>
      {posts.length === 0 ? noPostMessage :
        // (mobileView || column ?
        //   postListMobile :
        //   postListDesktop
        // )}
        postListDesktop
      }
    </Section>
  )
}

export default ThreePosts
