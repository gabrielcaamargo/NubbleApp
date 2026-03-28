import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {useSearchHistoryService} from '@service';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';

import {SearchHistory} from './components/SearchHistory/SearchHistory';

export function SearchScreen() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();
  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} onPress={() => addUser(item)} />;
  }

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
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Screen>
  );
}
