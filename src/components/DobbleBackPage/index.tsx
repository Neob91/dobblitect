import React from 'react';
import { connect } from 'react-redux';

import { DobblePage } from '@/components';
import { IStoreState } from '@/store';
import { IThemeState } from '@/store/theme';
import { dobbleBackCardStyle, dobbleBackPageStyle } from './style';

interface IStateProps {
  theme: IThemeState;
}

interface IProps extends IStateProps {}

const PDobbleBackPage: React.FC<IStateProps> = ({ theme }) => {
  const cardStyle = dobbleBackCardStyle(theme);
  const pageStyle = dobbleBackPageStyle(theme);

  return (
    <DobblePage extraClassName={pageStyle}>
      <div className={cardStyle} />
      <div className={cardStyle} />
      <div className={cardStyle} />
      <div className={cardStyle} />
      <div className={cardStyle} />
      <div className={cardStyle} />
    </DobblePage>
  );
};

const mapState = (state: IStoreState): IStateProps => {
  const { theme } = state;
  return { theme };
};

export const DobbleBackPage = connect(mapState)(PDobbleBackPage);
