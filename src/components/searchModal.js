import React from 'react';
import styled from 'styled-components';

import ButtonLink from './buttonLink';
import Flex from './flex';
import ModalWrapper from './modalWrapper';

const SearchModal = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }
  return (
    <ModalWrapper backgroundColor={'var(--yellow)'}>
      <Container>
        <Flex direction='column' halign='center'>
          <form onSubmit={handleSubmit}>
            <input type='text' name='search' placeholder='Type anything in here' required></input>
            <ButtonLink onClick={handleSubmit} type='attention'>Subscribe</ButtonLink>
          </form>
        </Flex>
      </Container>
    </ModalWrapper>
  )
}

const Container = styled.div`
  background-color: var(--yellow);
`;

export default SearchModal;
