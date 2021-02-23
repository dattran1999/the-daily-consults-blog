import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import ButtonLink from './buttonLink';
import Flex from './flex';
import ModalWrapper from './modalWrapper';

import { SubscribeModalContext } from '../context/modal';

const SubcribeModal = ({ title }) => {
  const [state, dispatch] = useContext(SubscribeModalContext);
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  }
  const closeModal = () => {
    dispatch({ type: 'toggle_button' });
  }
  return (
    <ModalWrapper backgroundColor={'var(--yellow)'} isOpen={state.active} closeModal={closeModal}>
      <Container>
        <Flex direction='column' halign='center'>
          <h3>{title}</h3>
          <p>Subscribe to our mailing list</p>
          <form onSubmit={handleSubmit}>
            <Input
              type='email'
              name='email'
              placeholder='example@mail.com'
              required
              onChange={e => setEmail(e.target.value)}
            />
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

const Input = styled.input`
  outline: none;
  margin-bottom: var(--spacing-4);
`;

export default SubcribeModal;
