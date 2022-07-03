import React from 'react';
import {Home} from './src/Pages/Home';
import {TaskProvider} from './src/Context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
};

export default App;
