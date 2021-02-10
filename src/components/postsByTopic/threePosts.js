import React from 'react';
import styled from 'styled-components';

import PostCard from '../postCard';
import Flex from '../flex';

// Column is whether to display the pictures in column form
const ThreePosts = ({ posts, column = false }) => {
  const noPostMessage = (
    <p>
      This section is currently empty 😀
    </p>
  )

  const postWrapper = (post, type) => {
    let postStyle;
    if (type === 'primary') {
      postStyle = { flex: '1', height: '100%' }
    }

    const description = column ? "" : post?.content.subtitle;

    return (
      <PostCard
        style={postStyle}
        title={post?.title}
        featuredImageId={post?.virtuals.previewImage.imageId}
        slug={post?.slug}
        date={post?.updatedAt}
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
          {posts[1] &&
            <div>
              <FirstPost>
                {postWrapper(posts[1], 'secondary')}
              </FirstPost>
              {postWrapper(posts[2], 'secondary')}
            </div>
          }
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
        {posts[1] &&
          postWrapper(posts[1], 'primary')
        }
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
  padding-right: 10px;
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
