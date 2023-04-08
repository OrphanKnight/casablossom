import { render } from '@testing-library/react';
import Checkout from '../index';

it('renders Checkout component', () => {
  const { container } = render(<Checkout />);
  expect(container).toMatchSnapshot();
})