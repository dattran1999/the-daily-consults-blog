import React from 'react';
import styled from 'styled-components';

import ThreePosts from './threePosts';
import ButtonLink from '../buttonLink';
import Flex from '../flex';

const PostsByTopic = ({ topicTitle, titleColor, posts, column = false }) => {
  return (
    <>
      {/* Only show section if it has posts */}
      {posts.length > 0 &&
        <>
          <Title color={titleColor}>{topicTitle}</Title>
          <ThreePosts posts={posts} column={column} />
        </>
      }
    </>
  )
}

const Title = styled.h1`
  color: ${props => props.color};
`;

export default PostsByTopic;
