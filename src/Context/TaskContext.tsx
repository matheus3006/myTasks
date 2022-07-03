import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

export interface ITaskContext {
  tasks: ITask[];
  addTask(task: ITask): void;
}

export const TaskContext = React.createContext<ITaskContext>(
  {} as ITaskContext,
);

export const TaskProvider: React.FunctionComponent<IProps> = ({children}) => {
  const addTask = (task: ITask) => {};

  const tasks = [{id: '1', title: 'Task01'}];
  return (
    <TaskContext.Provider value={{tasks, addTask}}>
      {children}
    </TaskContext.Provider>
  );
};
