import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { addSymbols } from '@/store/symbols';
import { IThemeState } from '@/store/theme';
import { IImage, readMultipleImages } from '@/utils/images';

interface IStateProps {
  theme: IThemeState;
}

interface IDispatchProps {
  onAddSymbols: (images: IImage[]) => void;
}

interface IOwnProps {
  dpi: number;
}

interface IProps extends IStateProps, IDispatchProps, IOwnProps {}

export const PDobbleSymbolSelect: React.FC<IProps> = ({ dpi, theme, onAddSymbols }) => {
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

const mapState = (state: IStoreState): IStateProps => ({
  theme: state.theme
});

const mapDispatch = dispatch => ({
  onAddSymbols: (images: IImage[]) => dispatch(addSymbols({ images }))
});

export const DobbleSymbolSelect = connect(mapState, mapDispatch)(PDobbleSymbolSelect);
