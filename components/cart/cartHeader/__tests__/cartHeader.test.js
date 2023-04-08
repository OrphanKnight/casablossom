import { render } from '@testing-library/react';
import CartHeader from '../index';

it('renders CartHeader component', () => {
  const { container } = render(<CartHeader/>);
  expect(container).toMatchSnapshot();
})