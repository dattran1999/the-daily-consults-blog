import React from 'react';
import styled from 'styled-components';

import PostCard from './postCard';
import ThreePosts from './postsByTopic/threePosts';

const AllPostsByTopic = ({ posts, titleColor, topicTitle }) => {
  const highlightPosts = posts.slice(0, 3);
  const otherPosts = posts.slice(3);
  console.log(highlightPosts, otherPosts)
  return (
    <>
      <Title color={titleColor}>{topicTitle}</Title>
      <HighlightPostsWrapper>
        <ThreePosts posts={highlightPosts} />
      </HighlightPostsWrapper>
      <h3>More from {topicTitle}</h3>
      {otherPosts.map((post, index) => (
        <PostCard
          key={index}
          title={post?.title}
          featuredImageId={post?.virtuals.previewImage.imageId}
          slug={post?.uniqueSlug}
          date={post?.updatedAt}
          description={post?.content.subtitle}
          tags={post.virtuals.tags}
          column={false}
          type='secondary'
        />
      ))}
    </>
  )
}

const Title = styled.h1`
  color: ${props => props.color};
`;

const HighlightPostsWrapper = styled.section`
  margin-bottom: var(--spacing-4);
`;

export default AllPostsByTopic;