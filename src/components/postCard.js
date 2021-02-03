import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { colors } from '../theme';

const PostCard = ({ title, featuredImage, slug, date, description, ...rest }) => {
  return (
    <Card style={rest} colors={colors}>
      <Article>
        {/* Header of post */}
        <header>
          {featuredImage &&
            <Image
              fluid={featuredImage.src.childImageSharp.fluid}
              alt={featuredImage.alt} />
          }
          <h2>
            <Link to={slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{date}</small>
        </header>

        {/* content */}
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            itemProp="description"
          />
        </section>
      </Article>
    </Card>
  )
}

const Card = styled.div`
  flex: 1;
  border-radius: 10px;
  background-color: ${props => props.colors.gray};
  padding: 10px 10px;
  margin: 10px 0 10px 5px;
  margin-left: 0;
  width: 100%;
`;

const Article = styled.article`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);

  p {
    margin-bottom: var(--spacing-0);
  }

  h2 {
    font-size: var(--fontSize-4);
    color: var(--color-primary);
    margin-bottom: var(--spacing-2);
    margin-top: var(--spacing-0);
  }

  header {
    margin-bottom: var(--spacing-4);
  }`
  ;

export default PostCard;
