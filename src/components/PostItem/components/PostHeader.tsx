import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center" marginBottom="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{height: 32, width: 32, borderRadius: 14}}
      />

      <Text preset="paragraphMedium" semiBold marginLeft="s12">
        {author.userName}
      </Text>
    </Box>
  );
}
