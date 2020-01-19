import { css } from 'emotion';

export const dobbleCardStyle = theme => css`
  position: relative;

  width: ${theme.cardSize}mm;
  height: ${theme.cardSize}mm;
  border-radius: 50%;

  background-color: ${theme.backgroundColor};
  border-width: ${Math.floor(theme.cardSize / 16)}mm;
  border-style: solid;
  border-color: ${theme.borderColor};
`;
