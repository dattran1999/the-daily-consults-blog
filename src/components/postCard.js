import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { colors } from '../theme';

const PostCard = ({ title, featuredImage, slug, date, description, ...rest }) => {
  console.log(featuredImage)
  return (
    <Card style={rest} colors={colors}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
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
      </article>
    </Card>
  )
}

const Card = styled.div`
  display: block;
  border-radius: 10px;
  background-color: ${props => props.colors.gray};
  padding: 10px 10px;
  margin: 10px 20px;
  margin-left: 0;
  width: 100%;
`;

export default PostCard;
