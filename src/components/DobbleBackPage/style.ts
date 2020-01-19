import { css } from 'emotion';

export const dobbleBackCardStyle = theme => css`
  width: ${theme.cardSize}mm;
  height: ${theme.cardSize}mm;
  box-sizing: border-box;

  border: 5mm solid ${theme.logoBorderColor};
  border-radius: 50%;

  background-color: ${theme.logoColor};
  background-image: url(${theme.logoUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
`;

export const dobbleBackPageStyle = theme => css`
  background-color: ${theme.logoBorderColor};
`;
