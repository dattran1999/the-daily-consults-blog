import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Image from "gatsby-image"

import Flex from './flex'

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <HeaderWrapper>
        <h1>Reviews</h1>
        <p>What some of our readers are saying</p>
      </HeaderWrapper>
      <Flex direction="row" halign="space-between">
        {Array.apply(null, Array(3)).map(() => (
          <TestimonialWrapper>
            <Image
              fluid={data.file.childImageSharp.fluid}
            />
            <p>Good shit</p>
          </TestimonialWrapper>
        ))}
      </Flex>
    </div>
  )
}

const HeaderWrapper = styled.div`
  text-align: center;
`

const TestimonialWrapper = styled.div`
  flex-basis: 30%;
  text-align: center;
`
export default Testimonials
