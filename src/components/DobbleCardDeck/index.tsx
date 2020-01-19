import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import { DobbleBackPage, DobblePage, DobbleCard } from '@/components';
import { IStoreState } from '@/store';

interface IProps {
  ids: string[];
}

const organizeCards = (ids: string[]) => {
  const pages = [];

  for (let i = 0; i < ids.length; i += 6) {
    const page = ids.slice(i, i + 6);

    while (page.length < 6) {
      page.push(null);
    }

    pages.push(page);
  }

  return pages;
};

export const PDobbleCardDeck: React.FC<IProps> = React.forwardRef(({ ids }, ref) => {
  const pages = useMemo(() => organizeCards(ids), [ids]);

  return (
    <div ref={ref as any}>
      {pages.map(page => (
        <>
          <DobblePage>
            {page.map(cardId => <DobbleCard id={cardId} key={cardId} />)}
          </DobblePage>
          <DobbleBackPage />
        </>
      ))}
    </div>
  );
});

const mapState = (state: IStoreState) => ({
  ids: state.cards.ids
});

export const DobbleCardDeck = connect(mapState, null, null, { forwardRef: true })(PDobbleCardDeck);
