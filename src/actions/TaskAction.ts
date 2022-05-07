import moment from 'moment';
import { Dispatch } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { ITask } from '../states/ITask';

const actionCreator = actionCreatorFactory('task-actions');

// show task list
export const showTaskListAction = actionCreator<ITask[]>('show-task-list');

// add task
export const addTaskAction = actionCreator<ITask>('add');

// toggle task flag
export const toggleCompleteAction = actionCreator<string>('toggle-complete');

// delete task
export const deleteTaskAction = actionCreator<string>('delete');

// dummyTasks
const dummyTasks: ITask[] = [
  {
    complete: false,
    expire: moment().add(1, 'day').toDate(),
    id: '0',
    taskName: 'task01',
  },
  {
    complete: true,
    expire: moment().add(1, 'day').toDate(),
    id: '1',
    taskName: 'task02',
  },
  {
    complete: false,
    expire: moment().add(-1, 'day').toDate(),
    id: '2',
    taskName: 'task03',
  },
  {
    complete: true,
    expire: moment().add(-1, 'day').toDate(),
    id: '3',
    taskName: 'task04',
  },
];

// get task list
export const getTaskList = (dispatch: Dispatch): void => {
  dispatch(showTaskListAction(dummyTasks));
};
