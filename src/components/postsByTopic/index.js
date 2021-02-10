import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ThreePosts from './threePosts';

const topicTitleToLink = {
  'Recently Upload': '/recently-upload',
  'Customer Insights Series': '/customer-insights',
  'Value Creation Series': '/value-creation',
  'Market Roadmap Series': '/market-roadmap',
  'In A Nutshell Series': '/in-a-nutshell',

}
const PostsByTopic = ({ topicTitle, titleColor, posts, column = false }) => {
  return (
    <>
      {/* Only show section if it has posts */}
      {posts.length > 0 &&
        <>
          <Link to={topicTitleToLink[topicTitle]}>
            <Title color={titleColor}>
              {topicTitle}
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
`;

export default PostsByTopic;
