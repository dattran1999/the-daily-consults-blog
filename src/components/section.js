import styled from "styled-components";

const Section = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  &:after {
    content: "";
    width: 100vw;
    border-bottom: 1px solid var(--dark-gray);
  }
`;
export default Section;
