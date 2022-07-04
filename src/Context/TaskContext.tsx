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
  removeTask(id: string): void;
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

  const removeTask = async (id: string) => {
    const newTaskList = data.filter(task => task.id !== id);
    setData(newTaskList);
    await AsyncStorage.setItem(taskData, JSON.stringify(newTaskList));
  };

  return (
    <TaskContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskList(): ITaskContext {
  const context = React.useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em um TaskProvider');
  }
  return context;
}
