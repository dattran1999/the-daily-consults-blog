import React from 'react'

import Flex from './flex'

const Hero = ({ title }) => {
  return (
    <Flex direction="row">
      <div style={{ flexBasis: '50%' }}>
        <h1>Discover {title}</h1>
        <h2>At TDCB, we deliver engaging and innovative insights about business strategy, to help entrepreneurs become market-changers today.</h2>
      </div>
      <div style={{ flexBasis: '50%' }}>
        Some picture here
      </div>
    </Flex>
  )
}

export default Hero
