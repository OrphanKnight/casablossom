import { render } from '@testing-library/react';
import Checkout from '../index';

it('renders homepage unchanged', () => {
  const { container } = render(<Checkout />);
  expect(container).toMatchSnapshot();
})