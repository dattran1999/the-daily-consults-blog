import React from 'react';
import styled from 'styled-components';

import Section from './section';
import ThreePosts from './threePosts';

const PostsByTopic = ({ topicTitle, titleColor, posts }) => {
  return (
    <Section>
      <Title color={titleColor}>{topicTitle}</Title>
      <ThreePosts posts={posts} />
    </Section>
  )
}

const Title = styled.h1`
  color: ${props => props.color};
`;

export default PostsByTopic;