import React from "react"

import Header from './header'

const Layout = ({ title, children }) => {

  return (
    <div className="global-wrapper">
      <Header title={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
