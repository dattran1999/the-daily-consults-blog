import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Container from './container';
import Flex from './flex';
import { colors } from '../theme';

const footer = () => {
  return (
    <Footer colors={colors}>
      <Container style={{ height: '100%' }}>
        <Flex
          direction="row"
          halign="space-around"
          valign="center"
          style={{ height: '100%' }}
        >
          <Link to="/">Story of the week</Link>
          <Link to="/">Posts</Link>
          <Link to="/">Books</Link>
          <Link to="/">More</Link>
        </Flex>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: ${props => props.colors.gray};
`;

export default footer
