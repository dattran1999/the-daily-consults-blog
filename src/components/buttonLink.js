import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../theme';

const ButtonLink = ({ children, type, ...rest }) => {
  return (
    <Link>
      <Button type={type} colors={colors}>
        {children}
      </Button>
    </Link>
  )
}

const Button = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 25px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    (props.type === 'primary' && props.colors.yellow) ||
    (props.type === 'secondary' && props.colors.black)
  };
  color: ${props =>
    (props.type === 'primary' && props.colors.black) ||
    (props.type === 'secondary' && props.colors.white)
  };
  :hover {
    cursor: pointer;
  }
`;

export default ButtonLink;
