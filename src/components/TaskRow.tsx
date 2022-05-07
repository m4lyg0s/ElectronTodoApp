import moment from 'moment';
import React, { useCallback, useMemo, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, toggleCompleteAction } from '../actions/TaskAction';
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
    dispatch(toggleCompleteAction(data.id));
  }, [data.id]);

  const onDeleteClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      dispatch(deleteTaskAction(data.id));
      e.stopPropagation();
    },
    [data.id],
  );
  return (
    <>
      <div onClick={onRowClick}>{expiration}</div>
      <div>{data?.complete}</div>
      <div>{data?.taskName}</div>
      <div onClick={onDeleteClick}>deleteButton</div>
    </>
  );
};

export default TaskRow;