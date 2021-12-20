import {createStore} from 'redux';
import { tokenReducer } from './tokens/TokensReducer';

const Store = createStore(tokenReducer);

export default Store;