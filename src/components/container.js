import styled from "styled-components";

const Container = styled.div`
  margin: var(--spacing-0) auto;
  max-width: ${props => props.isBlogPost ? 'var(--blog-maxWidth-wrapper)' : 'var(--maxWidth-wrapper)'};
  padding: 0 var(--spacing-5);
  padding-top: ${props => props.hasPaddingVertical ? 'var(--spacing-32)' : '0'};
  padding-bottom: ${props => props.hasPaddingVertical ? 'var(--spacing-10)' : '0'};
`;

Container.defaultProps = {
  hasPaddingVertical: true,
  isBlogPost: false
}
export default Container;