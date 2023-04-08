import { render } from '@testing-library/react';

import CircledIconBtn from '../index';

it('renders CircledIconBtn component', () => {
  const props= {type:"submit", text:"Sign in"}
  const { container } = render(<CircledIconBtn {...props} />);
  expect(container).toMatchSnapshot();
})