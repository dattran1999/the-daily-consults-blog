import React, { useState, useEffect, useRef, useContext } from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import styled from 'styled-components';

import { colors } from '../theme';
import Container from "./container";
import ButtonLink from './buttonLink';
import Flex from './flex';
import { MdSearch } from 'react-icons/md';
import SearchModal from './searchModal';

import { SubscribeModalContext } from '../context/modal';

const Header = ({ title, logo }) => {
  const links = [
    { title: 'Customer Insights Series', to: '/customer-insights-series', titleColor: "var(--orange)" },
    { title: 'Value Creation Series', to: '/value-creation-series', titleColor: "var(--blue)" },
    { title: 'Market Roadmap Series', to: '/market-roadmap-series', titleColor: "var(--green)" },
    { title: 'In A Nutshell Series', to: '/in-a-nutshell-series', titleColor: "var(--fuschia)" },
  ]

  // subscribe modal
  const [state, dispatch] = useContext(SubscribeModalContext);
  const handleSubscribe = () => {
    dispatch({ type: 'toggle_button' });
  }

  // search modal
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  }

  // handle scrolling
  const [showNavBar, setShowNavBar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

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


  // hamburger menu handler
  const navLinksRef = useRef();
  const [hamburgerMenuOpened, setHamburgerMenuOpened] = useState(false);
  const hamburgerClick = () => {
    setHamburgerMenuOpened(!hamburgerMenuOpened);
    if (hamburgerMenuOpened) {
      navLinksRef.current.classList.add('nav-links--hidden');
      navLinksRef.current.classList.remove('active');
    } else {
      navLinksRef.current.classList.remove('nav-links--hidden');
      navLinksRef.current.classList.add('active');
    }
  }

  function getDate() {
    const dateObj = new Date();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = `${day}/${month}/${year}`;
    return output;
  }

  return (
    <>
      <SearchModal isOpen={isSearchModalOpen} closeModal={closeSearchModal} />
      <Transition>
        <NavBar className={showNavBar ? 'active' : 'hidden'} colors={colors}>
          <Container hasPaddingVertical={false} style={{ height: '100%' }}>
            <NavBarHeader>
              <LogoWrapper>
                <Link to='/'>
                  <Flex direction='row' valign='center'>
                    <ImageWrapper>
                      <Image fluid={logo} alt="logo" />
                    </ImageWrapper>
                    <Flex direction='column'>
                      <h1>{title}</h1>
                      <h4>{getDate()}</h4>
                    </Flex>
                  </Flex>
                </Link>
              </LogoWrapper>

              <ButtonsWrapper valign='center'>
                <SearchButton onClick={() => setIsSearchModalOpen(true)} />
                <div onClick={handleSubscribe}>
                  <ButtonLink type='attention'>
                    Subscribe
                  </ButtonLink>
                </div>
              </ButtonsWrapper>
            </NavBarHeader>

            <NavBarMain>
              <HamburgerMenuWrapper onClick={hamburgerClick}>
                <HamburgerMenu>
                  <span></span>
                  <span></span>
                  <span></span>
                </HamburgerMenu>
                <NavLinksWrapper ref={navLinksRef} colors={colors}>
                  {links.map((link, index) => (
                    <LinkWrapper linkColor={link.titleColor} key={index} >
                      <Link to={link.to}><h4>{link.title}</h4></Link>
                    </LinkWrapper>
                  ))}
                </NavLinksWrapper>
              </HamburgerMenuWrapper>

              <NavLinksWrapper colors={colors}>
                {links.map((link, index) => (
                  <LinkWrapper linkColor={link.titleColor} key={index}>
                    <Link to={link.to}><h5>{link.title}</h5></Link>
                  </LinkWrapper>
                ))}
              </NavLinksWrapper>
            </NavBarMain>
          </Container>
        </NavBar>
      </Transition>
    </>
  )
}

const NAV_BAR_HEIGHT = '10rem';
const NAV_BAR_BREAKPOINT = '1000px';

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
  .nav-links--hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
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
  /* z-index: -1; */
  @media (min-width: ${NAV_BAR_BREAKPOINT}) {
    height: 100%;
  }
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${NAV_BAR_BREAKPOINT}) {
    /* hidden by default */
    visibility: hidden;
    position: absolute;
    top: ${NAV_BAR_HEIGHT};
    left: 0;
    height: calc(60vh - ${NAV_BAR_HEIGHT});
    flex-direction: column;
    justify-content: space-evenly;
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
  @media (min-width: ${NAV_BAR_BREAKPOINT}) {
    display: none;
  }
`;

const NavBarHeader = styled.div`
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0 0;
    @media (max-width: 800px) {
      font-size: var(--fontSize-2);
    }
  }
  h4 {
    margin: 0 0;
  }
`;

const NavBarMain = styled.div`
  height: 40%;
  display: flex;
`;

const LinkWrapper = styled.div`
  a {
    color: inherit;
    h5 {
      margin: 0 0;
      color: inherit;
    }
    h4 {
      margin: 0 0;
      color: inherit;
    }
    :hover {
      transition: all 300ms ease-out;  
      color: ${props => props.linkColor};
    }
  }
`;

const LogoWrapper = styled(LinkWrapper)`
  @media (max-width: ${NAV_BAR_BREAKPOINT}) {
    position: absolute;
    width: 100vw;
  }
`;

const ImageWrapper = styled.div`
  width: 5em;
  min-width: 60px;
  margin-right: 1em;
`;

const ButtonsWrapper = styled(Flex)`
  @media (max-width: ${NAV_BAR_BREAKPOINT}) {
    position: relative;
    top: 82%;
    margin-left: auto;
  }
`;
const SearchButton = styled(MdSearch)`
  margin-right: 2rem;
  font-size: var(--fontSize-4);
  @media (max-width: ${NAV_BAR_BREAKPOINT}) {
    margin-right: 1.2rem;
  }
  :hover {
    cursor: pointer;
  }
`;
export default Header
