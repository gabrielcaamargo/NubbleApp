import React from 'react';

import {Controller} from 'react-hook-form';
import {UseControllerProps, FieldValues} from 'react-hook-form';

import {TextInput, ITextInputProps} from '@components';
export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: ITextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          placeholder="@"
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
