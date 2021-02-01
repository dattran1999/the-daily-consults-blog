import React from "react"

import Header from './header'

const Layout = ({ title, children }) => {

  return (
    <>
      <Header title={title} />
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
