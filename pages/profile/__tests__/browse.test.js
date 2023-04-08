import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Search from '../Search';
import Browse from '../../browse';

it('renders Browse component', () => {
  const { container } = render(<Provider><Browse /></Provider>);
  expect(container).toMatchSnapshot();
})