import React, {useState} from 'react';
import {ITextInputProps, TextInput} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type TPasswordInputProps = Omit<ITextInputProps, 'RightComponent'>;

export function PasswordInput(props: TPasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={isSecureTextEntry}
      RightComponent={
        <Icon
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
