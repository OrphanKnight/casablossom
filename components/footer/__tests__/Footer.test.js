import { render } from '@testing-library/react';
import Footer from '../index';

it('renders Footer component', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
})