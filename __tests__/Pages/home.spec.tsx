import React from 'react';
import {render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';

import {TaskProvider, useTaskList} from '../../src/Context/TaskContext';
import {Home} from '../../src/Pages/Home';

describe('Home page', () => {
  test('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewText = getByPlaceholderText('Nova Tarefa...');

    expect(inputNewText).toBeDefined();

    expect(inputNewText.props.placeholder).toBeTruthy();
  });

  test('Verifica a insercao de um item na list de tarefa', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });

    const data = {id: 'Task01', title: 'Task01'};

    await act(() => result.current.addTask(data));
    expect(result.current.tasks).toBeTruthy();
  });
});
