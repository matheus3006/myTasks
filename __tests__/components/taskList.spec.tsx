import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-hooks';

import {TaskProvider, useTaskList} from '../../src/Context/TaskContext';
import {TaskList} from '../../src/components/Tasks';

describe('TaskList component', () => {
  test('Verifica se um item da lista é removido', async () => {
    render(<TaskList />, {
      wrapper: TaskProvider,
    });
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TaskProvider,
    });

    const data = {id: 'Task01', title: 'Task01'};
    await act(() => result.current.addTask(data));
    expect(result.current.tasks[0].title).toEqual('Task01');

    await act(() => result.current.removeTask('Task01'));

    expect(result.current.tasks.length).toEqual(0);
  });
});
