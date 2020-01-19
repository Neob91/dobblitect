import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { IThemeState, addLogo } from '@/store/theme';
import { IImage, readSingleImage } from '@/utils/images';

interface IStateProps {
  theme: IThemeState;
}

interface IDispatchProps {
  onAddLogo: (image: IImage) => void;
}

interface IOwnProps {
  dpi: number;
}

interface IProps extends IStateProps, IDispatchProps, IOwnProps {}

export const PDobbleLogoSelect: React.FC<IProps> = ({ dpi, theme, onAddLogo }) => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = theme.cardSize*(dpi/25.4);
    onAddLogo(await readSingleImage(e.target.files[0], maxSize));
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
  onAddLogo: (image: IImage) => dispatch(addLogo({ image }))
});

export const DobbleLogoSelect = connect(mapState, mapDispatch)(PDobbleLogoSelect);
