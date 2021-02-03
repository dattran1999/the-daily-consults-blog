import React from 'react';
import Section from './section';
import PostCard from './postCard';
import Flex from './flex';
import styled from 'styled-components';

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
      postStyle = { flex: '1', height: '100%' }
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
      <PostsContainer>
        <ColumnLarge>
          {postWrapper(posts[0], 'primary')}
        </ColumnLarge>
        <ColumnSmall>
          {postWrapper(posts[1], 'secondary')}
          {postWrapper(posts[2], 'secondary')}
        </ColumnSmall>
      </PostsContainer>
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
        (column ?
          postListMobile :
          postListDesktop
        )
      }
    </Section>
  )
}

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ColumnLarge = styled.div`
  flex: 2;
  flex-flow: column;
  margin-bottom: 10px;
  margin-right: 10px;
  @media (max-width: 800px) {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

const ColumnSmall = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export default ThreePosts
