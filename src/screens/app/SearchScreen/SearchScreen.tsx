import React, {useState} from 'react';

import {useUserSearch} from '@domain';

import {Icon, Screen, Text, TextInput} from '@components';
import {useDebounce} from '@hooks';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const {} = useUserSearch(debouncedSearch);

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          LeftComponent={<Icon name="search" color="gray3" />}
          value={search}
          onChangeText={setSearch}
          placeholder="Digite sua busca"
        />
      }>
      <Text>Search</Text>
    </Screen>
  );
}
