import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TaskListContainer from './container/TaskList';
import store from './Store';

const container = document.getElementById('contents') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <TaskListContainer />
  </Provider>,
  container,
);
