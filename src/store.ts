import * as redux from 'redux';
import { IState } from './states/IState';
import taskReducer from './reducers/TaskReducer';

const combineReducer = redux.combineReducers<IState>({
  taskList: taskReducer,
});

export const store = redux.createStore(combineReducer);

export default store;
