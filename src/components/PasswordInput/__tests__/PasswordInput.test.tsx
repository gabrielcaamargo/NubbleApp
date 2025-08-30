import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {IconProps} from '@components';

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

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBe(true);
  });

  test('when pressing the eye icon, it should show the password and change to the eye off icon', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeOn: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeOn));

    const eyeOff: IconProps['name'] = 'eyeOff';
    const eyeOffElement = screen.getByTestId(eyeOff);

    expect(eyeOffElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/password/i);
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
