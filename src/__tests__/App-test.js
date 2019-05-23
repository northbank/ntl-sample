import React from 'react';
import { fireEvent, render } from 'native-testing-library';

import App from '../App';

test('it renders a welcome message', () => {
  const { getByText } = render(<App />);

  getByText(/welcome to react native/i);
  getByText(/to get started/i);
  getByText(/press cmd\+r to reload/i);
});

test('it can handle events', () => {
  const spy = jest.fn();
  const { getByText } = render(<App onPress={spy} />);

  fireEvent.press(getByText(/fire your event/i));
  expect(spy).toHaveBeenCalledTimes(1);
})
