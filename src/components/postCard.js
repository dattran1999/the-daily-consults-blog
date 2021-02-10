import React from 'react';
import { Link } from 'gatsby';
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
  showDescription = true,
  // should display in row or column
  column = true,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <Clickable href={`${MEDIUM_URL}/${slug}`} itemProp="url">
        <Article direction={column ? 'column' : 'row'}>
          {/* Header of post */}
          <Header column={column}>
            <Img
              src={`${MEDIUM_CDN}/${featuredImageId}`}
              column={column}
            />
          </Header>

          {/* content */}
          <ContentWrapper column={column}>
            <Heading type={type}><span itemProp="headline">{title}</span></Heading>
            <Content showDescription={showDescription}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
            <small>{date}</small>
          </ContentWrapper>
        </Article>
      </Clickable>
    </Card>
  )
}

const Clickable = styled.a`
  :hover {
    cursor: pointer;
  }
`;
const Card = styled.div`
  flex: 1;
  margin-top: 20px; 
  margin-right: 20px;
  width: 100%;
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

const IMAGE_SIZE = '10rem';

const Header = styled.header`
  width: 100%;
  width: ${props => props.column === false && IMAGE_SIZE};
  height: ${props => props.column === false && IMAGE_SIZE};;
  margin-right: ${props => props.column === false && '5rem'};
  margin-bottom: var(--spacing-4);
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  width: ${props => props.column === false && IMAGE_SIZE};
  height: ${props => props.column === false && IMAGE_SIZE};;
`;

const ContentWrapper = styled.section`
`;

const Heading = styled.h2`
  margin-bottom: var(--spacing-4);
  margin-top: var(--spacing-0);
  font-size: ${props => props.type === 'primary' ? 'var(--fontSize-5)' : 'var(--fontSize-2)'};
  @media (max-width: 28rem) {
    font-size: var(--fontSize-3);
  }
`;

const Content = styled.p`
  display: ${props => props.showDescription ? 'block' : 'none'};
  @media (max-width: 28rem) {
    display: block;
  }
  margin-bottom: var(--spacing-4);
`;

export default PostCard;
