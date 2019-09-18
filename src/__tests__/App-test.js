import React from 'react';
import { fireEvent, render, NativeTestEvent } from 'native-testing-library';

import App from '../App';

test('it renders a welcome message', () => {
  const { getByText } = render(<App />);

  getByText(/welcome to react native/i);
  getByText(/to get started/i);
  getByText(/press cmd\+r to reload/i);
});

test('it can handle events', () => {
  const spy = jest.fn();
  const { getByTestId } = render(<App onChange={spy} />);

  fireEvent(getByTestId('control'), new NativeTestEvent('change', { nativeEvent: { value: 'fails' }}));
  fireEvent.change(getByTestId('control'), { nativeEvent: { value: 'still fails' }});
  expect(spy).toHaveBeenCalledTimes(2);
})
