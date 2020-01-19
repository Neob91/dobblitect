import React from 'react';
import { Global } from '@emotion/core';

import { DobbleCardGroup, DobbleCard } from '@/components';
import { globalStyle } from './style';

export const App: React.FC = () => (
  <>
    <Global styles={globalStyle} />
    <DobbleCardGroup ids={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']} />
  </>
);
