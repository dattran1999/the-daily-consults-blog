import React from 'react'
import styled from 'styled-components'

import Flex from './flex'

const Hero = ({ title }) => {
  return (
    <Flex direction="row">
      <Section>
        <h1>Discover {title}</h1>
        <h2>At TDCB, we deliver engaging and innovative insights about business strategy, to help entrepreneurs become market-changers today.</h2>
      </Section>
      <Section>
        Some picture here
      </Section>
    </Flex>
  )
}

const Section = styled.div`
  flex-basis: 50%;
`
export default Hero
