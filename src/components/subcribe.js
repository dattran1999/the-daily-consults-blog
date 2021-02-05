import React from 'react';
import styled from 'styled-components';

import ButtonLink from './buttonLink';
import Flex from './flex';

const Subcribe = ({ title }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }
  return (
    <Container>
      <Flex direction='column' halign='center'>
        <h3>{title}</h3>
        <p>Subscribe to our mailing list</p>
        <form onSubmit={handleSubmit}>
          <input type='email' name='email' placeholder='example@mail.com' required></input>
          <ButtonLink onClick={handleSubmit} type='attention'>Subscribe</ButtonLink>
        </form>
      </Flex>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--yellow);
`;

export default Subcribe;
