import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { colors } from '../theme';
import Container from "./container";

const Header = ({ title }) => {
  const links = [
    { title: title, to: '/' },
    { title: 'Posts', to: '/' },
    { title: 'Book', to: '/' },
    { title: 'More', to: '/' },
  ]

  // handle scrolling
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

  const NavLinks = links.map((link, index) => (
    <Link key={index} to={link.to}>{link.title}</Link>
  ))

  // hamburger menu handler
  const navLinksRef = useRef();
  const [hamburgerMenuOpened, setHamburgerMenuOpened] = useState(false);
  const hamburgerClick = () => {
    setHamburgerMenuOpened(!hamburgerMenuOpened);
    if (hamburgerMenuOpened) {
      navLinksRef.current.classList.add('hidden');
      navLinksRef.current.classList.remove('active');
    } else {
      navLinksRef.current.classList.remove('hidden');
      navLinksRef.current.classList.add('active');
    }
  }

  return (
    <Transition>
      <NavBar className={showNavBar ? 'active' : 'hidden'} colors={colors}>
        <Container hasPaddingVertical={false} style={{ height: '100%' }}>
          <HamburgerMenuWrapper onClick={hamburgerClick}>
            <HamburgerMenu>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerMenu>
            <NavLinksWrapper ref={navLinksRef} colors={colors}>
              {NavLinks}
            </NavLinksWrapper>
          </HamburgerMenuWrapper>

          <NavLinksWrapper colors={colors}>
            {NavLinks}
          </NavLinksWrapper>
        </Container>
      </NavBar>
    </Transition>
  )
}

const NAV_BAR_HEIGHT = '3rem';

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
  height: ${NAV_BAR_HEIGHT};
  z-index: 1000;
  background-color: ${props => props.colors.yellow};
`;

const NavLinksWrapper = styled.div`
  width: 100%;
  @media (min-width: 28rem) {
    height: 100%;
  }
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 28rem) {
    /* hidden by default */
    visibility: hidden;
    position: absolute;
    top: ${NAV_BAR_HEIGHT};
    left: 0;
    flex-direction: column;
    background-color: ${props => props.colors.yellow};
  }
`;

const HamburgerMenu = styled.div`
  width: 25px;
  span {
    margin-top: 5px;
    background: black;
    height: 2px;
    width: 100%;
    display: block;
  }
`;

const HamburgerMenuWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media (min-width: 28rem) {
    display: none;
  }
`;
export default Header
