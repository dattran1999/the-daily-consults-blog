import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { MdSearch } from 'react-icons/md'
import Flex from './flex';
import ModalWrapper from './modalWrapper';
import PostCard from './postCard';

const SearchModal = ({ isOpen, closeModal }) => {
  const { allMediumPost } = useStaticQuery(
    graphql`
      query {
        allMediumPost(sort: {fields: createdAt, order: DESC}) {
          nodes {
            title
            updatedAt(formatString: "DD/MM/YYYY")
            content {
              subtitle
            }
            virtuals {
              previewImage {
                imageId
              }
              tags {
                name
              }
              totalClapCount
            }
            uniqueSlug
          }
        }
      }
    `
  )
  const posts = allMediumPost.nodes;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // check if user have searched before
  const [haveSearch, setHaveSearch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setHaveSearch(true);
    const results = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(results);
  }

  return (
    <ModalWrapper
      backgroundColor={'var(--white)'}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <Flex
        style={{ height: '100%' }}
        direction='column'
        valign='center'
        halign='center'
      >
        <Form onSubmit={handleSubmit}>
          <Flex direction='row' valign='center' halign='space-between'>
            <Input
              type='text'
              name='search'
              placeholder='Search'
              autocomplete='off'
              autoFocus
              onChange={e => setSearchQuery(e.target.value)}
            />
            <SearchButton onClick={handleSubmit} />
          </Flex>
        </Form>
        {searchResults.length === 0 && haveSearch ?
          <p>No results</p>
          :
          <Results direction='column'>
            {searchResults.map((post, index) => (
              <PostCard
                key={index}
                title={post?.title}
                featuredImageId={post?.virtuals.previewImage.imageId}
                slug={post?.uniqueSlug}
                date={post?.updatedAt}
                description={post?.content.subtitle}
                column={false}
                type='secondary'
              />
            ))}
          </Results>
        }
      </Flex>
    </ModalWrapper>
  )
}

const Form = styled.form`
  padding-bottom: 5px;
  border-bottom: 1px solid var(--dark-gray);
  text-align: center;
  font-size: var(--fontSize-2);
  position: relative;
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
`;

const SearchButton = styled(MdSearch)`
  cursor: pointer;
`;

const Results = styled(Flex)`
  overflow: scroll;
`;
export default SearchModal;
