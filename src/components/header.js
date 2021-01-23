import React from "react"
import { Link } from "gatsby"

import Flex from './flex'

const Header = ({ title }) => {
  return (
    <>
      <header>
        <Flex
          direction="row"
          halign="space-between"
          grow={1}
        >
          <Flex
            direction="row"
            halign="space-between"
            grow={1}
          >
            <p> <Link to="/">{title}</Link> </p>
            <p> <Link to="/">Story of the week</Link> </p>
            <p> <Link to="/">Posts</Link> </p>
            <p> <Link to="/">Books</Link> </p>
            <p> <Link to="/">More</Link> </p>
          </Flex>
        </Flex>
      </header>

    </>
  )
}

export default Header
