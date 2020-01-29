import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { addSymbols } from '@/store/symbols';
import { IThemeState } from '@/store/theme';
import { IImage, readMultipleImages } from '@/utils/images';

interface StateProps {
  theme: IThemeState;
}

interface DispatchProps {
  onAddSymbols: (images: IImage[]) => void;
}

interface OwnProps {
  dpi: number;
}

interface Props extends StateProps, DispatchProps, OwnProps {}

export const PSymbolLoader: React.FC<Props> = ({ dpi, theme, onAddSymbols }) => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = theme.cardSize*(dpi/25.4)/2;
    onAddSymbols(await readMultipleImages(e.target.files, maxSize));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} multiple />
    </div>
  );
};

const mapState = (state: IStoreState): StateProps => ({
  theme: state.theme
});

const mapDispatch = dispatch => ({
  onAddSymbols: (images: IImage[]) => dispatch(addSymbols({ images }))
});

export const SymbolLoader = connect(mapState, mapDispatch)(PSymbolLoader);
