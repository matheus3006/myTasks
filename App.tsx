import React from 'react';
import {Home} from './src/Pages/Home';
import {TaskContext} from './src/TaskContext';

const App = () => {
  return (
    <TaskContext.Provider value={{id: '1', title: 'task01'}}>
      <Home />
    </TaskContext.Provider>
  );
};

export default App;
