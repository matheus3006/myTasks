import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
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

  test('Verifica se click no botao insere item na lista', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TaskProvider,
    });

    const inputNewText = getByPlaceholderText('Nova Tarefa...');
    const buttonInput = getByTestId('addButton');
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });

    const data = {id: 'Task01', title: 'Task01'};
    act(() => fireEvent.changeText(inputNewText, data.title));

    await act(async () => {
      await fireEvent.press(buttonInput);
    });

    expect(result.current.tasks).toBeTruthy();
  });
});
