import React from 'react';
import Section from './section';
import ThreePosts from './threePosts';

const RecentlyUpload = ({ posts }) => {
  return (
    <Section>
      <h1>Recently Upload</h1>
      <ThreePosts posts={posts} />
    </Section>
  )
}

export default RecentlyUpload
