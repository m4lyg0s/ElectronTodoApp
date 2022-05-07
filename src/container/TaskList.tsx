import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../states/IState';
import { ITask, ITaskList } from '../states/ITask';
import TaskRow from '../components/TaskRow';
import { getTaskList } from '../actions/TaskAction';
import AddTask from '../components/AddTask';

const createTaskList = (tasks: ITask[]): JSX.Element[] => {
  return tasks
    .sort((a, b) => {
      return a.expire < b.expire
        ? -1
        : a.expire.getTime() === b.expire.getTime()
        ? 0
        : 1;
    })
    .map(it => {
      return <TaskRow key={it.id} data={it} />;
    });
};

const TaskListContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTaskList(dispatch);
  }, []); // --(a)
  const taskList = useSelector<IState, ITaskList>(a => a.taskList); // --(b)
  const taskListElement = useMemo(() => {
    return createTaskList(taskList.tasks);
  }, [taskList.tasks]); // --(c)
  return (
    <div>
      <div>TODO</div>
      <AddTask />
      <div>{taskListElement}</div>
    </div>
  );
};

export default TaskListContainer;
