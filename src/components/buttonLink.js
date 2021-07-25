import React from 'react';
import styled from 'styled-components';

import { colors } from '../theme';

const ButtonLink = ({ children, type, ...rest }) => {
  return (
    <a {...rest}>
      <Button type={type} colors={colors}>
        {children}
      </Button>
    </a>
  )
}

const Button = styled.div`
  /* width: 200px; */
  height: 40px;
  border-radius: 5px;
  padding: 10px 25px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    (props.type === 'attention' && 'var(--orange)') ||
    (props.type === 'primary' && props.colors.yellow) ||
    (props.type === 'secondary' && props.colors.black)
  };
  color: ${props =>
    (props.type === 'attention' && 'var(--black)') ||
    (props.type === 'primary' && props.colors.black) ||
    (props.type === 'secondary' && props.colors.white)
  };
  font-weight: ${props => props.type === 'attention' && 'var(--fontWeight-bold)'};
  :hover {
    cursor: pointer;
  }
`;

export default ButtonLink;
