import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ITextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
}

export function TextInput({
  label,
  errorMessage,
  ...textInputProps
}: ITextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderWidth: errorMessage ? 2 : 1,
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInput}
            {...textInputProps}
          />
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  );
}

const $textInput: StyleProp<TextStyle> = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
