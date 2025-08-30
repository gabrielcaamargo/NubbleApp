import React from 'react';

import {render, screen} from 'test-utils';

import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText('Password');
    expect(inputElement.props.secureTextEntry).toBe(true);
  });
});
