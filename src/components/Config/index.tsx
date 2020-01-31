import React from 'react';
import { LogoLoader, SymbolLoader } from './components';

export const Config: React.FC = () => {
  return (
    <div>
      <LogoLoader dpi={300} />
      <SymbolLoader dpi={300} />
    </div>
  );
};
