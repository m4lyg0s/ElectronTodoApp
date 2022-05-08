import moment from 'moment';
import React, { useCallback, useMemo, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/TaskAction';
import { ITask } from '../states/ITask';

const TaskRow: React.FC<{ data: ITask }> = props => {
  const { data } = props;
  const dispatch = useDispatch();

  const expiration = useMemo(() => {
    return new Date() < data.expire || data.complete;
  }, [data.expire, data.complete]);

  const expireString = useMemo(() => {
    return moment(data.expire).format('YYYY-MM-DD HH:mm');
  }, [data.expire]);

  const onRowClick = useCallback(() => {
    toggleTask(data, dispatch);
  }, [data]);

  const onDeleteClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      deleteTask(data.id, dispatch);
      e.stopPropagation();
    },
    [data.id],
  );
  return (
    <>
      <div onClick={onRowClick}>
        {expiration}:{expireString}
      </div>
      <div>{data?.complete}</div>
      <div>{data?.taskName}</div>
      <div onClick={onDeleteClick}>deleteButton</div>
    </>
  );
};

export default TaskRow;
