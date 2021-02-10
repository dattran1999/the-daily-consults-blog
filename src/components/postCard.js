import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { colors } from '../theme';
import Flex from './flex';

const MEDIUM_CDN = 'https://miro.medium.com/max/596';
const MEDIUM_URL = 'https://christopherdieunguyen.medium.com'

const PostCard = ({
  // primary or secondary
  type = 'primary',
  title,
  featuredImageId,
  slug,
  date,
  description,
  // should display in row or column
  column = true,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <a to={`${MEDIUM_URL}/${slug}`} itemProp="url">
        <Article direction={column ? 'column' : 'row'}>
          {/* Header of post */}
          <header style={{ width: '100%' }}>
            <ImageWrapper>
              <img src={`${MEDIUM_CDN}/${featuredImageId}`} style={{ width: '100%' }}></img>
            </ImageWrapper>
          </header>

          {/* content */}
          <ContentWrapper >
            <Heading type={type}><span itemProp="headline">{title}</span></Heading>
            <Content type={type}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
            <small>{date}</small>
          </ContentWrapper>
        </Article>
      </a>
    </Card>
  )
}

const Card = styled.div`
  flex: 1;
  margin-top: 20px; 
  margin-right: 20px;
  width: 100%;
`;

const Heading = styled.h2`
  margin-bottom: var(--spacing-4);
  margin-top: var(--spacing-0);
  font-size: ${props => props.type === 'primary' ? 'var(--fontSize-5)' : 'var(--fontSize-2)'};
  @media (max-width: 28rem) {
    font-size: var(--fontSize-3);
  }
`;

const Article = styled(Flex)`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
  color: var(--black);

  p {
    margin-bottom: var(--spacing-0);
  }

  @media (max-width: 28rem) {
    /* display row regardless if we want column or not */
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: var(--spacing-4);
`;

const ContentWrapper = styled.section`
`;

const Content = styled.p`
  display: ${props => props.type === 'secondary' && 'none'};
  @media (max-width: 28rem) {
    display: block;
  }
  margin-bottom: var(--spacing-4);
`;

export default PostCard;
