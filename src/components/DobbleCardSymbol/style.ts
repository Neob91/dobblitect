import { css } from 'emotion';

export const getCardSymbolStyle = ({ imageUrl }) => css`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${imageUrl});
`;

export const getCardSymbolCustomizedStyle = ({ leftOffset, topOffset, width, height, rotationFactor }) => ({
  left: `${leftOffset - width / 2}mm`,
  top: `${topOffset - height / 2}mm`,
  width: `${width}mm`,
  height: `${height}mm`,
  transform: `rotate(${rotationFactor * 2 * Math.PI}rad)`
});
