import React from 'react';
import styled from 'styled-components';

import Flex from './flex';
import PostsByTopic from './postsByTopic';
import Section from './section';

const Hero = ({ posts }) => {
  return (
    <Section>
      <Flex direction="row" halign="space-around">
        <Primary>
          <PostsByTopic topicTitle="Recently Upload" titleColor="black" posts={posts} />
        </Primary>
        <Secondary>
          <PostsByTopic topicTitle="Popular" titleColor="black" posts={posts} column={true} />
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
