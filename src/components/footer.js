import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Image from 'gatsby-image';
import Container from './container';
import Flex from './flex';
import { colors } from '../theme';

const footer = ({ title, logo }) => {
  const getInitials = (string) => {
    let names = string.split(' ');
    let initials = '';
    for (const name of names) {
      initials += name.substring(0, 1).toUpperCase();
    }
    return initials;
  };
  return (
    <Footer colors={colors}>
      <Container hasPaddingVertical={false}>
        <Flex
          direction="row"
          halign="space-between"
          valign="flex-start"
        >
          <Section>
            <Flex valign='center'>
              <ImageWrapper>
                <Image fluid={logo} alt="logo" />
              </ImageWrapper>
              <Flex direction="column">
                <h1>{getInitials(title)}</h1>
                <h5>© {new Date().getFullYear()}</h5>
              </Flex>
            </Flex>
          </Section>
          <Section>
            <h3>Socials</h3>
            <Flex direction='column'>
              <a href="mailto: Christopherdieunguyen@gmail.com" rel="noreferrer" target="_blank">
                Email
              </a>
              <a href="https://www.facebook.com/christopherdieu.nguyen" rel="noreferrer" target="_blank">
                Facebook
              </a>
              <a href="https://twitter.com/Christo95515927" rel="noreferrer" target="_blank">
                Twitter
              </a>
            </Flex>
          </Section>
          <Section>
            <h3>About</h3>
            <Flex direction='column'>
              <Link to='/'>About</Link>
              <Link to='/'>News & Updates</Link>
              <Link to='/'>FAQ</Link>
            </Flex>
          </Section>
        </Flex>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: ${props => props.colors.gray};
`;

const Section = styled.div`
  h1, h2, h3, h4, h5, p {
    margin-top: 0;
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 1.2rem;
  }
`;
const ImageWrapper = styled.div`
  width: 5em;
  min-width: 60px;
  margin-right: 1em;
`;

export default footer;
