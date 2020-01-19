import { css } from 'emotion';

export const dobbleContainerStyle = css``;

export const dobblePageStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  break-after: page;

  width: 210mm;
  height: 290mm;
  padding: 10mm;

  border: 2px solid #ccc;
`;

export const dobbleRowStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;

  height: 90mm;
`;
