import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface PostCommentBottomProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) {
  if (!hasNextPage) {
    return null;
  }

  return (
    <Pressable onPress={fetchNextPage}>
      <Text color="primary" bold textAlign="center">
        Ver mais
      </Text>
    </Pressable>
  );
}
