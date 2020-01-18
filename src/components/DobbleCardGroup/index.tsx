import React from 'react';
import { dobbleCardGroupStyle } from './style';

interface IProps {
  children: React.ReactNode;
}

export const DobbleCardGroup: React.FC<IProps> = ({ children }) => (
  <div className={dobbleCardGroupStyle}>
    {children}
  </div>
);
