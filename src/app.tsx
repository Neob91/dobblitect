import React, { useRef } from 'react';
import { Global } from '@emotion/core';

import { DobbleCardDeck, DobbleGenerator, DobbleLogoSelect, DobbleSymbolSelect, DobbleSymbolFineTuner, Print } from '@/components';
import { globalStyle } from './style';

export const App: React.FC = () => {
  const ref = useRef();

  return (
    <>
      <Global styles={globalStyle} />
      <Print printRef={ref} />
      <DobbleSymbolFineTuner />
      <DobbleLogoSelect dpi={300} />
      <DobbleSymbolSelect dpi={300} />
      <DobbleGenerator />
      <DobbleCardDeck ref={ref} />
    </>
  );
};
