import React from 'react';
import styled from 'styled-components';

import PostCard from '../postCard';
import Flex from '../flex';

const ThreePosts = ({ posts, column = false }) => {
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

    console.log(post.frontmatter.featuredImage)
    return (
      <PostCard
        style={postStyle}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredImage}
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
          <FirstPost>
            {postWrapper(posts[1], 'secondary')}
          </FirstPost>
          {postWrapper(posts[2], 'secondary')}
        </ColumnSmall>
      </PostsContainer>
    </ol>
  )
  const postListMobile = (
    <ol style={{ listStyle: `none` }}>
      <Flex direction="column" valign='center'>
        <FirstPost>
          {postWrapper(posts[0], 'primary')}
        </FirstPost>
        {postWrapper(posts[1], 'primary')}
      </Flex>
    </ol>
  )
  return (
    <>
      {posts.length === 0 ? noPostMessage :
        (column ?
          postListMobile :
          postListDesktop
        )
      }
    </>
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
  border-right: 1px solid var(--dark-gray);
  @media (max-width: 800px) {
    margin-bottom: 0;
    margin-right: 0;
    border-right: none;
    border-bottom: 1px solid var(--dark-gray);
  }
`;

const ColumnSmall = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FirstPost = styled.div`
  border-bottom: 1px solid var(--dark-gray);
`;
export default ThreePosts
