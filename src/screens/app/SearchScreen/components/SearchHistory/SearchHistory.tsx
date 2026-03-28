import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory} from '@service';

import {Box, Text} from '@components';
import {ProfileUser} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }

  return (
    <Box>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <Text preset="headingMedium">Buscas recentes</Text>
        }
      />
    </Box>
  );
}
