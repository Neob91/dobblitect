import { createStore } from 'redux';
import { reducer } from './reducer';

export * from './types';

export const store = createStore(reducer)
