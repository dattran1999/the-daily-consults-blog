import React from "react"

import Header from './header';
import Footer from './footer';
import Container from './container';

const Layout = ({ title, children, logo }) => {

  return (
    <>
      <Header title={title} logo={logo} />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
