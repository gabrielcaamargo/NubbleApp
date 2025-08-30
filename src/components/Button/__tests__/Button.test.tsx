import React from 'react';

import {fireEvent, render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    const mockedOnPress = jest.fn();
    const {getByText} = render(
      <Button title="Button Title" onPress={mockedOnPress} />,
    );

    const titleElement = getByText(/Button title/i);
    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});
