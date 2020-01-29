import React, { useRef } from 'react';

import { Config, DobbleCardDeck, DobbleGenerator, DobbleSymbolFineTuner, Print } from '@/components';

export const App: React.FC = () => {
  const ref = useRef();

  return (
    <>
      <Print printRef={ref} />
      <DobbleSymbolFineTuner />
      <Config />
      <DobbleGenerator />
      <DobbleCardDeck ref={ref} />
    </>
  );
};
