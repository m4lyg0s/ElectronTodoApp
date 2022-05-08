import moment from 'moment';
import { Dispatch } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { ITask } from '../states/ITask';
import '../core/ICore';

const actionCreator = actionCreatorFactory('task-actions');

// show task list
// 開始時 showTaskListAction.started、成功時 showTaskListAction.done、失敗時 showTaskListAction.failed のアクションが生成されます。
export const showTaskListAction = actionCreator.async<null, ITask[], string>(
  'show-task-list',
);

// add task
export const addTaskAction = actionCreator<ITask>('add');

// toggle task flag
export const toggleCompleteAction = actionCreator<string>('toggle-complete');

// delete task
export const deleteTaskAction = actionCreator<string>('delete');

// dummyTasks
// const dummyTasks: ITask[] = [
//   {
//     complete: false,
//     expire: moment().add(1, 'day').toDate(),
//     id: '0',
//     taskName: 'task01',
//   },
//   {
//     complete: true,
//     expire: moment().add(1, 'day').toDate(),
//     id: '1',
//     taskName: 'task02',
//   },
//   {
//     complete: false,
//     expire: moment().add(-1, 'day').toDate(),
//     id: '2',
//     taskName: 'task03',
//   },
//   {
//     complete: true,
//     expire: moment().add(-1, 'day').toDate(),
//     id: '3',
//     taskName: 'task04',
//   },
// ];

// get task list
export const getTaskList = async (dispatch: Dispatch): Promise<void> => {
  dispatch(showTaskListAction.started(null));
  const taskList = await window.core.loadTaskList().catch(e => {
    console.error(e);
    dispatch(
      showTaskListAction.failed({
        error: '読み込み失敗',
        params: null,
      }),
    );
  });
  if (!taskList) return;
  dispatch(showTaskListAction.done({ result: taskList, params: null }));
};

export const addTask = async (
  task: ITask,
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(showTaskListAction.started(null));
  const taskList = await window.core.saveTask(task).catch(e => {
    console.error(e);
    dispatch(
      showTaskListAction.failed({
        error: '書き込みに失敗しました。',
        params: null,
      }),
    );
  });
  if (!taskList) return;
  dispatch(showTaskListAction.done({ result: taskList, params: null }));
};

export const toggleTask = async (
  task: ITask,
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(showTaskListAction.started(null));
  task.complete = !task.complete;
  const taskList = await window.core.saveTask(task).catch(e => {
    console.error(e);
    dispatch(
      showTaskListAction.failed({
        error: '書き込みに失敗しました。',
        params: null,
      }),
    );
  });
  if (!taskList) return;
  dispatch(showTaskListAction.done({ result: taskList, params: null }));
};

export const deleteTask = async (
  taskId: string,
  dispatch: Dispatch,
): Promise<void> => {
  dispatch(showTaskListAction.started(null));
  const taskList = await window.core.deleteTask(taskId).catch(e => {
    console.error(e);
    dispatch(
      showTaskListAction.failed({
        error: '書き込みに失敗しました。',
        params: null,
      }),
    );
  });
  if (!taskList) return;
  dispatch(showTaskListAction.done({ result: taskList, params: null }));
};
