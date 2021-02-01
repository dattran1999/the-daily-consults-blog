import React from "react"

import Header from './header';
import Footer from './footer';

const Layout = ({ title, children }) => {

  return (
    <>
      <Header title={title} />
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
