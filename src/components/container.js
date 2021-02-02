import styled from "styled-components";

const Container = styled.div`
  margin: var(--spacing-0) auto;
  max-width: ${props => props.isBlogPost ? 'var(--blog-maxWidth-wrapper)' : 'var(--maxWidth-wrapper)'};
  padding: ${props => props.hasPaddingVertical ? 'var(--spacing-10)' : '0'} var(--spacing-0);
`;

Container.defaultProps = {
  hasPaddingVertical: true,
  isBlogPost: false
}
export default Container;