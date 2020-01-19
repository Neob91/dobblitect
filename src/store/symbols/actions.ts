import actionCreatorFactory from 'typescript-fsa';

import { IImage } from '@/utils/images';

const actionCreator = actionCreatorFactory('SYMBOLS');

export const addSymbols = actionCreator<{ images: IImage[] }>('ADD_SYMBOLS');
