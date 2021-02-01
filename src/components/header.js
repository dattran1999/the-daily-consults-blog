import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Flex from './flex'

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
      <NavBar className={showNavBar ? 'active' : 'hidden'}>
        <Flex
          direction="row"
          halign="space-around"
          grow={1}
        >
          <p> <Link to="/">{title}</Link> </p>
          <p> <Link to="/">Story of the week</Link> </p>
          <p> <Link to="/">Posts</Link> </p>
          <p> <Link to="/">Books</Link> </p>
          <p> <Link to="/">More</Link> </p>
        </Flex>
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
`;
export default Header
