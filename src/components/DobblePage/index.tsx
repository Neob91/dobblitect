import React from 'react';
import { cx } from 'emotion';

import { dobblePageStyle, dobbleRowStyle } from './style';

interface IOwnProps {
  extraClassName?: string;
}

interface IProps extends IOwnProps {}

export const DobblePage: React.FC<IProps> = ({ children, extraClassName }) => {
  const c = React.Children.toArray(children);

  return (
    <div className={cx(dobblePageStyle, extraClassName)}>
      <div className={dobbleRowStyle}>
        {c.slice(0, 2)}
      </div>
      <div className={dobbleRowStyle}>
        {c.slice(2, 4)}
      </div>
      <div className={dobbleRowStyle}>
        {c.slice(4, 6)}
      </div>
    </div>
  );
};
