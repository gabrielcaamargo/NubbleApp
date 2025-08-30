import React from 'react';
import {StyleSheet} from 'react-native';

import {ReactTestInstance} from 'react-test-renderer';
import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);

  const titleElement = screen.queryByText(/Button title/i);
  const loadingElement = screen.queryByTestId('activity-indicator');
  const buttonElement = screen.getByTestId('button');

  return {titleElement, loadingElement, buttonElement};
}

describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('doesnt call the onPress function when it is disabled and it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if the button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});

    const titleStyle = StyleSheet.flatten(titleElement?.props.style);

    expect(titleStyle.color).toBe(theme.colors.gray2);
  });

  describe('When button is loading', () => {
    it('shows activity indicator', () => {
      const {loadingElement} = renderComponent({loading: true});

      expect(loadingElement).toBeTruthy();
    });

    it('hides button title', () => {
      const {titleElement} = renderComponent({loading: true});

      expect(titleElement).toBeFalsy();
    });

    it('disables the button onPress function', () => {
      const mockedOnPress = jest.fn();
      const {buttonElement} = renderComponent({
        loading: true,
        onPress: mockedOnPress,
      });

      fireEvent.press(buttonElement);

      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
