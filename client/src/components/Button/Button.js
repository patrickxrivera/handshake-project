import { ButtonStyles } from './styles';
import colors from '../../utils/colors';

import React from 'react';

const defaultProps = {
  color: '#fff',
  width: '90px',
  bgColor: colors.primary,
  height: '30px',
  fontSize: '14px',
  marginRight: '0px',
  hoverBgColor: 'rgba(9, 132, 280, 1)',
  border: 'none',
  marginTop: '0px',
  uppercase: false,
  isDisabled: false
};

const Button = ({ children, handleClick, ...props }) => (
  <ButtonStyles onClick={handleClick} {...props}>
    {children}
  </ButtonStyles>
);

Button.defaultProps = defaultProps;

export default Button;
