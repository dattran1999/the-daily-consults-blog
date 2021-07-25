import React, { useContext } from 'react';
import styled from 'styled-components';

import ButtonLink from './buttonLink';
import Flex from './flex';
import PostsByTopic from './postsByTopic';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

import { filterPostByTag } from '../utils/filter';

import { SubscribeModalContext } from '../context/modal';

const AllPosts = ({ posts }) => {
  const [_, dispatch] = useContext(SubscribeModalContext);
  const handleSubscribe = () => {
    dispatch({ type: 'toggle_button' });
  }

  const CustomerInsightsPosts = posts.filter(post => filterPostByTag(post, "Customer Insight"));
  const ValueCreationPosts = posts.filter(post => filterPostByTag(post, "Value Creation"));
  const MarketRoadmapPosts = posts.filter(post => filterPostByTag(post, "Marketing"));
  const InANutShellPosts = posts.filter(post => filterPostByTag(post, "Strategy"));
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
          <SocialMediaSection>
            <p>Follow us:</p>
            <SocialMediaWrapper>
              <SocialLink
                href="https://www.facebook.com/christopherdieu.nguyen"
                target="_blank"
              >
                <FaFacebook />
              </SocialLink>

              <SocialLink
                href="https://twitter.com/Christo95515927"
                target="_blank"
                style={{ marginLeft: '0.5em' }}
              >
                <FaTwitter />
              </SocialLink>
            </SocialMediaWrapper>
          </SocialMediaSection>
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

const SocialMediaSection = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
`;

const SocialMediaWrapper = styled.div`
  font-size: var(--fontSize-4);
`;

const SocialLink = styled.a`
  color: inherit;
  transition: all 200ms ease-in;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default AllPosts;
