import actionCreatorFactory from 'typescript-fsa';

import { IImage } from '@/utils/images';

const actionCreator = actionCreatorFactory('THEME');

export const addLogo = actionCreator<{ image: IImage }>('ADD_LOGO');
