import React from 'react';

export interface ITaskContext {
  id: string;
  title: string;
}

export const TaskContext = React.createContext<ITaskContext>(
  {} as ITaskContext,
);
