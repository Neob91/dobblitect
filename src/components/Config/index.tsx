import React from 'react';
import { LogoLoader, SymbolLoader } from './components';

export const Config: React.FC = () => {
  return (
    <div>
      <SymbolLoader dpi={300} />
      <LogoLoader dpi={300} />
    </div>
  );
};
