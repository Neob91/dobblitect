import { css } from 'emotion';

export const dobbleCardStyle = theme => css`
  position: relative;

  width: ${theme.cardSize}mm;
  height: ${theme.cardSize}mm;
  box-sizing: border-box;

  background-color: ${theme.backgroundColor};
  border-width: ${Math.floor(theme.borderWidth)}mm;
  border-style: solid;
  border-color: ${theme.borderColor};
  border-radius: 50%;
`;
