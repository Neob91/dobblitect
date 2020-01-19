import { css } from '@emotion/core';

export const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
  }

  @media print {
    #app {
      display: none;
    }
  }

  @page {
    margin: 0;
    size: A4;
  }
`;
