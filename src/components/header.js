import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { colors } from '../theme';
import Flex from './flex';
import Container from "./container";

const Header = ({ title }) => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [scrollPos, setScrollPos] = useState(document.body.getBoundingClientRect().top);

  const handleScroll = () => {
    // show navbar only when scrolling up
    // disappear when scrolling down
    const currentScrollPos = document.body.getBoundingClientRect().top;
    const isScrollingUp = currentScrollPos > scrollPos;
    setShowNavBar(isScrollingUp);
    setScrollPos(currentScrollPos);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [showNavBar, scrollPos])

  return (
    <Transition>
      <NavBar className={showNavBar ? 'active' : 'hidden'} colors={colors}>
        <Container style={{ height: '100%' }}>
          <Flex
            direction="row"
            halign="space-around"
            valign="center"
            style={{ height: '100%' }}
          >
            <Link to="/">{title}</Link>
            <Link to="/">Story of the week</Link>
            <Link to="/">Posts</Link>
            <Link to="/">Books</Link>
            <Link to="/">More</Link>
          </Flex>
        </Container>
      </NavBar>
    </Transition>
  )
}

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  z-index: 1000;
  background-color: ${props => props.colors.yellow};
`;
export default Header
