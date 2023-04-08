import { render } from '@testing-library/react';
import Infos from '../index';


it('renders Infos component', () => {
  const props= {type:"submit", text:"Sign in"}
  const { container } = render(<Infos {...props} />);
  expect(container).toMatchSnapshot();
})