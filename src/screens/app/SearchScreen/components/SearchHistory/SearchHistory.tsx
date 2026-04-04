import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@service';

import {Box, Icon, Text} from '@components';
import {ProfileUser} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();
  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        avatarProps={{size: 48}}
        RightComponent={
          <Icon name="trash" onPress={() => removeUser(item.id)} />
        }
      />
    );
  }

  return (
    <Box>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <Text preset="headingMedium" marginBottom="s16">
            Buscas recentes
          </Text>
        }
      />
    </Box>
  );
}
