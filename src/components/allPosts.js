import React, { useContext } from 'react';
import styled from 'styled-components';

import ButtonLink from './buttonLink';
import Flex from './flex';
import PostsByTopic from './postsByTopic';

import { SubscribeModalContext } from '../context/modal';

const AllPosts = ({ posts }) => {
  const [state, dispatch] = useContext(SubscribeModalContext);
  const handleSubscribe = () => {
    dispatch({ type: 'toggle_button' });
  }

  const filerPost = (post, name) => {
    for (const tag of post.virtuals.tags) {
      if (tag.name.toLowerCase() === name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  const CustomerInsightsPosts = posts.filter(post => filerPost(post, "Customer Insight"));
  const ValueCreationPosts = posts.filter(post => filerPost(post, "Value Creation"));
  const MarketRoadmapPosts = posts.filter(post => filerPost(post, "Marketing"));
  const InANutShellPosts = posts.filter(post => filerPost(post, "Strategy"));
  return (
    <Flex>
      <Primary>
        <PostsByTopic topicTitle="Customer Insights Series" titleColor="var(--orange)" posts={CustomerInsightsPosts} />
        <PostsByTopic topicTitle="Value Creation Series" titleColor="var(--blue)" posts={ValueCreationPosts} />
        <PostsByTopic topicTitle="Market Roadmap Series" titleColor="var(--green)" posts={MarketRoadmapPosts} />
        <PostsByTopic topicTitle="In a Nutshell Series" titleColor="var(--fuschia)" posts={InANutShellPosts} />
      </Primary>
      <Secondary>
        <ButtonWrapper onClick={handleSubscribe}>
          <ButtonLink type='primary'>Subscribe</ButtonLink>
        </ButtonWrapper>
        <ButtonWrapper>
          <SocialMediaWrapper>
            <p>Social Media Accounts</p>
          </SocialMediaWrapper>
        </ButtonWrapper>
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
  height: 100vh;
  position: sticky;
  top: var(--spacing-32);
  @media (max-width: 28em) {
    display: none;
  }
`

const ButtonWrapper = styled.div`
  margin-top: var(--spacing-16);
`;

const SocialMediaWrapper = styled.div`
  background-color: var(--yellow);
  border-radius: 5px;
  padding: 10px 10px;
`;

export default AllPosts;
