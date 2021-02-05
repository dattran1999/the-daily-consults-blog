import React from 'react';
import styled from 'styled-components';

import { MdSearch } from 'react-icons/md'
import Flex from './flex';
import ModalWrapper from './modalWrapper';

const SearchModal = ({ isOpen, closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }
  return (
    <ModalWrapper backgroundColor={'var(--white)'} isOpen={isOpen} closeModal={closeModal}>
      <Flex direction='column' halign='center'>
        <Form onSubmit={handleSubmit}>
          <Flex direction='row' valign='center' halign='space-between'>
            <Input type='text' name='search' placeholder='Search' autocomplete='off' autofocus />
            <SearchButton onClick={handleSubmit} />
          </Flex>
        </Form>
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

export default SearchModal;
