import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { ITaskList } from '../states/ITask';
import { showTaskListAction } from '../actions/TaskAction';

const initialState: ITaskList = {
  tasks: [],
  loading: false,
  failedMessage: '',
};

const taskReducer = reducerWithInitialState<ITaskList>(initialState)
  // 開始時
  .case(showTaskListAction.started, state => ({
    ...state,
    loading: true,
    failedMessage: '',
  }))
  .case(showTaskListAction.done, (state, payload) => {
    // const taskList = [...state.tasks, payload];
    return {
      ...state,
      tasks: payload.result,
      loading: false,
      failedMessage: '',
    };
  })
  .case(showTaskListAction.failed, (state, payload) => {
    // const taskList = state.tasks.filter(task => task.id !== payload);
    return {
      ...state,
      loading: false,
      failedMessage: payload.error,
    };
  })
  .build();

export default taskReducer;
