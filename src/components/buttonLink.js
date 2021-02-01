import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../theme';
import Flex from './flex';

const ButtonLink = ({ children, type, ...rest }) => {
  let typeStyle;
  switch (type) {
    case 'primary':
      typeStyle = primaryStyle;
      break;
    case 'secondary':
      typeStyle = secondaryStyle;
      break;
  }
  return (
    <Flex halign='center'>
      <Link>
        <Flex
          {...rest}
          style={{ ...typeStyle, ...commonStyle }}
          valign='center'
          halign='center'>
          {children}
        </Flex>
      </Link>
    </Flex>
  )
}

const primaryStyle = {
  backgroundColor: colors.yellow,
  color: colors.black,
  padding: '10px 25px',
  whiteSpace: 'nowrap',
  transition: 'background-color 0.2s ease-out',
}

const secondaryStyle = {
  backgroundColor: colors.black,
  color: colors.white,
}

const commonStyle = {
  width: '200px',
  height: '40px',
  borderRadius: '5px',
}

export default ButtonLink;
