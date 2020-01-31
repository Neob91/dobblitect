import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@/store';
import { IThemeState, addLogo } from '@/store/theme';
import { IImage, readSingleImage } from '@/utils/images';

interface StateProps {
  theme: IThemeState;
}

interface DispatchProps {
  onAddLogo: (image: IImage) => void;
}

interface OwnProps {
  dpi: number;
}

interface Props extends StateProps, DispatchProps, OwnProps {}

export const PLogoLoader: React.FC<Props> = ({ dpi, theme, onAddLogo }) => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = theme.cardSize*(dpi/25.4);
    onAddLogo(await readSingleImage(e.target.files[0], maxSize));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

const mapState = (state: IStoreState): StateProps => ({
  theme: state.theme
});

const mapDispatch = dispatch => ({
  onAddLogo: (image: IImage) => dispatch(addLogo({ image }))
});

export const LogoLoader = connect(mapState, mapDispatch)(PLogoLoader);
