import moment from 'moment';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../actions/TaskAction';

const AddTask: React.FC = () => {
  const dispatch = useDispatch();

  const [expire, setExpire] = useState<Date>(new Date());
  const [taskName, setTaskName] = useState<string>('');

  const addTaskFunction = useCallback(() => {
    dispatch(
      addTaskAction({
        complete: false,
        expire,
        taskName,
        id: '',
      }),
    );
  }, [expire, taskName]);

  const onChangeTaskName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value);
  }, []);

  const onChangeDeadLine = useCallback((date: Date) => {
    setExpire(date);
  }, []);
  return (
    <>
      <div>
        <label>
          task name
          <input type="text" value={taskName} onChange={onChangeTaskName} />
        </label>
      </div>
      <div>
        <label>
          dead line
          <DatePicker
            selected={expire}
            showTimeSelect={true}
            dateFormat="yyyy-MM-dd HH:mm"
            onChange={onChangeDeadLine}
          />
        </label>
      </div>
      <button onClick={addTaskFunction}>+</button>
    </>
  );
};

export default AddTask;
