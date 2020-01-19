import React, { useMemo } from 'react';

import { DobbleCard } from '@/components/DobbleCard';
import { dobbleContainerStyle, dobblePageStyle, dobbleRowStyle } from './style';

interface IProps {
  ids: string[];
}

const organizeCards = (ids: string[]) => {
  const pages = [];
  const rows = [];

  for (let i = 0; i < ids.length; i += 2) {
    const x = ids.slice(i, i + 2);

    while (x.length < 2) {
      x.push(null);
    }

    rows.push(x);
  }

  for (let i = 0; i < rows.length; i += 3) {
    const x = rows.slice(i, i + 3);

    while (x.length < 3) {
      x.push([]);
    }

    pages.push(x);
  }

  return pages;
};

export const DobbleCardGroup: React.FC<IProps> = ({ ids }) => {
  const pages = useMemo(() => organizeCards(ids), [ids]);

  return (
    <div className={dobbleContainerStyle}>
      {pages.map(page => (
        <div className={dobblePageStyle}>
          {page.map(row => (
            <div className={dobbleRowStyle}>
              {row.map(id => <DobbleCard id={id} key={id} />)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
