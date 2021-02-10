import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { colors } from '../theme';

const MEDIUM_CDN = 'https://miro.medium.com/max/596';
const MEDIUM_URL = 'https://christopherdieunguyen.medium.com'

const PostCard = ({ type, title, featuredImageId, slug, date, description, ...rest }) => {
  return (
    <Card {...rest}>
      <Link to={`${MEDIUM_URL}/${slug}`} itemProp="url">
        <Article>
          {/* Header of post */}
          <header>
            <ImageWrapper>
              <img src={`${MEDIUM_CDN}/${featuredImageId}`} style={{ width: '100%' }}></img>
            </ImageWrapper>
            <Heading type={type}><span itemProp="headline">{title}</span></Heading>
          </header>

          {/* content */}
          <Content type={type}>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
          </Content>
          <small>{date}</small>
        </Article>
      </Link>
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
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-0);
  font-size: ${props => props.type === 'primary' ? 'var(--fontSize-5)' : 'var(--fontSize-2)'};
  @media (max-width: 28rem) {
    font-size: var(--fontSize-3);
  }
`;

const Article = styled.article`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
  color: var(--black);

  p {
    margin-bottom: var(--spacing-0);
  }

  h2, h5 {
  }

  header {
    margin-bottom: var(--spacing-4);
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: var(--spacing-4);
`;

const Content = styled.section`
  display: ${props => props.type === 'secondary' && 'none'};
  @media (max-width: 28rem) {
    display: block;
  }
  margin-bottom: var(--spacing-4);
`;

export default PostCard;
