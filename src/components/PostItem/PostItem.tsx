import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';
import { PostActions } from './components/PostActions';

interface PostItemProps {
  post: Post;
}

export function PostItem({post}: PostItemProps) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions 
        favoriteCount={post.favoriteCount}
        commentCount={post.commentCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
