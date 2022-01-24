import {combineReducers} from 'redux';
import tiendaReducer from './tienda/reducer';

const reducers = combineReducers({
  tienda: tiendaReducer,
});

export default reducers;
