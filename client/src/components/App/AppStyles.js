import styled, { injectGlobal } from 'styled-components';
import colors from '../../utils/colors';

export const AppStyles = injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  color: ${colors.font};
  fill: currentcolor;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial,
    sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.35;
  display: flex;
  justify-content: center;
  background-color: #e9ebee;
  min-height: 100vh;
`;
