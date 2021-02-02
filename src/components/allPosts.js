import React from 'react';
import styled from 'styled-components';

import ButtonLink from './buttonLink';
import Flex from './flex';
import PostsByTopic from './postsByTopic';

const AllPosts = ({ posts }) => {
  return (
    <Flex>
      <Primary>
        <PostsByTopic topicTitle="Marketing" titleColor="yellow" posts={posts} />
        <PostsByTopic topicTitle="Sales" titleColor="orange" posts={posts} />
      </Primary>
      <Secondary>
        <ButtonLink type='primary'>Subscribe</ButtonLink>
      </Secondary>
    </Flex>
  )
}

const Primary = styled.div`
  flex: 5;
  @media (min-width: 28em) {
    margin-right: 5em;
  }
`

const Secondary = styled.div`
  flex: 1;
  position: sticky;
  top: var(--spacing-32);
  margin-top: var(--spacing-32);
  @media (max-width: 28em) {
    display: none;
  }
`
export default AllPosts;
