import React from 'react';
import styled from 'styled-components';

import Flex from './flex';
import PostsByTopic from './postsByTopic';
import Section from './section';

const Hero = ({ posts }) => {
  const popularPosts = [...posts].sort((a, b) => {
    const keyA = a.virtuals.totalClapCount;
    const keyB = b.virtuals.totalClapCount;
    // Compare the 2 dates
    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;
    return 0;
  });
  return (
    <Section>
      <Flex direction="row" halign="space-around">
        <Primary>
          <PostsByTopic topicTitle="Recently Upload" titleColor="black" posts={posts} />
        </Primary>
        <Secondary>
          <PostsByTopic topicTitle="Popular" titleColor="black" posts={popularPosts} column={true} />
        </Secondary>
      </Flex>
    </Section>
  )
}

const Primary = styled.div`
  flex: 5;
  padding-right: 10px;
  @media (min-width: 28em) {
    margin-right: 5em;
  }
`

const Secondary = styled.div`
  flex: 1;
  @media (max-width: 28em) {
    display: none;
  }
`
export default Hero
