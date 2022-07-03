import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITaskContext {
  id: string;
  title: string;
}

export const TaskContext = React.createContext<ITaskContext>(
  {} as ITaskContext,
);

export const TaskProvider: React.FunctionComponent<IProps> = ({children}) => {
  return (
    <TaskContext.Provider value={{id: '1', title: 'task01'}}>
      {children}
    </TaskContext.Provider>
  );
};
