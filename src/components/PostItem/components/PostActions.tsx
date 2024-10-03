import React from 'react';
import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  function likePost() {
    // TODO:
  }

  function navigateToComments() {
    // TODO:
  }

  function savePost() {
    // TODO:
  }

  return (
    <Box flexDirection="row" marginTop="s16">
      <Item
        onPress={likePost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={favoriteCount}
        marked
      />

      <Item
        onPress={likePost}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
        marked={false}
      />

      <Item
        onPress={likePost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
        marked
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({icon, marked, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      flexDirection="row"
      marginRight="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold marginLeft="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
