import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { moveCardSymbol, resizeCardSymbol, rotateCardSymbol } from '@/store/cards';

interface IDispatchProps {
  onMoveSymbol: (x, y) => void;
  onResizeSymbol: (delta) => void;
  onRotateSymbol: (delta) => void;
}

interface IProps extends IDispatchProps {}

export const PDobbleSymbolFineTuner: React.FC<IProps> = ({ onMoveSymbol, onResizeSymbol, onRotateSymbol }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.which === 189) {
        onResizeSymbol(-0.04);
      } else if (e.which === 187) {
        onResizeSymbol(0.04);
      } else if (e.which === 37) {
        onMoveSymbol(-0.04, 0);
        e.preventDefault();
      } else if (e.which === 39) {
        onMoveSymbol(0.04, 0);
        e.preventDefault();
      } else if (e.which === 40) {
        onMoveSymbol(0, 0.04);
        e.preventDefault();
      } else if (e.which === 38) {
        onMoveSymbol(0, -0.04);
        e.preventDefault();
      } else if (e.which === 191) {
        onRotateSymbol(0.04);
      }
    };

    document.addEventListener('keydown', handleKey, false);
    return () => document.removeEventListener('keydown', handleKey, false);
  });

  return <div />
};

const mapDispatch = dispatch => ({
  onMoveSymbol: (x: number, y: number) => dispatch(moveCardSymbol({ x, y })),
  onResizeSymbol: (delta: number) => dispatch(resizeCardSymbol({ delta })),
  onRotateSymbol: (delta: number) => dispatch(rotateCardSymbol({ delta }))
});

export const DobbleSymbolFineTuner = connect(null, mapDispatch)(PDobbleSymbolFineTuner);
