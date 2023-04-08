import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Search from '../Search';
import { useRouter } from "next/router";
jest.mock('next/router', () => ({
    useRouter: jest.fn()
    }))
it('renders Search component', () => {
  useRouter.mockReturnValue({ query: {}});
    // const mockStore = createStore({});


  const { container } = render( <Provider>
        <Search/>
      </Provider>);
  expect(container).toMatchSnapshot();
})