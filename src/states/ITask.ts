// Task State
export interface ITask {
  // flag
  complete: boolean;
  // expire
  expire: Date;
  // task id
  id: string;
  // task Name
  taskName: string;
}

// task list
export interface ITaskList {
  // task list
  tasks: ITask[];
  // Loading status
  loading: boolean;
  // error message
  failedMessage: string;
}
