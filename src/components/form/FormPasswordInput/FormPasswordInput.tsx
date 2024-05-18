import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput, TPasswordInputProps} from '@components';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: TPasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          onChangeText={field.onChange}
          value={field.value}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
