import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

interface IProps {
  children: React.ReactElement;
}

const taskData = '@MyTasks:Tasks';

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
  const [data, setData] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(taskData);
      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }
    loadTasks();
  }, []);

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
    } catch (err) {
      throw new Error(err as string);
    }
  };

  return (
    <TaskContext.Provider value={{tasks: data, addTask}}>
      {children}
    </TaskContext.Provider>
  );
};
