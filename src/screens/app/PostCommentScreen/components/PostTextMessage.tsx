import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface PostTextMessageProps {
  postId: number;
  onAddComment: () => {};
}

export function PostTextMessage({postId, onAddComment}: PostTextMessageProps) {
  const {createComment} = usePostCommentCreate(postId, {
    onSucess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
    },
  });
  const [message, setMessage] = useState<string>('');

  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      placeholder="Escreva um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
