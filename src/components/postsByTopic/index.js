import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { BsArrowRight } from 'react-icons/bs';

import ThreePosts from './threePosts';

const topicTitleToLink = {
  'Recently Upload': '/recently-upload',
  'Customer Insights Series': '/customer-insights-series',
  'Value Creation Series': '/value-creation-series',
  'Market Roadmap Series': '/market-roadmap-series',
  'In a Nutshell Series': '/in-a-nutshell-series',

}
const PostsByTopic = ({ topicTitle, titleColor, posts, column = false }) => {
  return (
    <>
      {/* Only show section if it has posts */}
      {posts.length > 0 &&
        <>
          <Link style={{ width: '100%' }} to={topicTitleToLink[topicTitle]}>
            <Title color={titleColor}>
              {topicTitle}
              <BsArrowRight />
            </Title>
          </Link>
          <ThreePosts posts={posts} column={column} />
        </>
      }
    </>
  )
}

const Title = styled.h1`
  color: ${props => props.color};
  :hover {
    svg {
      transition: all 200ms ease-out;
      transform: translateX(30%);
    }
  }
  svg {
    font-size: var(--fontSize-4);
    margin-left: 0.8rem;
    transition: all 200ms ease-in;
  }
`;

export default PostsByTopic;
