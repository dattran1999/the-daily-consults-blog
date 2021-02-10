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
        type={type}
        style={postStyle}
        title={post?.title}
        featuredImageId={post?.virtuals.previewImage.imageId}
        slug={post?.uniqueSlug}
        date={post?.updatedAt}
        description={description}
        showDescription={!!!(type === 'secondary')}
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
          {postWrapper(posts[0], 'secondary')}
        </FirstPost>
        <FirstPost>
          {posts[1] &&
            postWrapper(posts[1], 'secondary')
          }
        </FirstPost>
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

const MARGIN = '1.2rem';
const ColumnLarge = styled.div`
  flex: 2;
  flex-flow: column;
  margin-bottom: ${MARGIN};
  margin-right: ${MARGIN};
  padding-right: ${MARGIN};
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
