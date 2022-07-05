import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/Pages/Home';

describe('Home page', () => {
  test('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);

    const inputNewText = getByPlaceholderText('Nova Tarefa...');

    expect(inputNewText).toBeDefined();

    expect(inputNewText.props.placeholder).toBeTruthy();
  });
});
