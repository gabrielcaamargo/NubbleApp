import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentário aleatório/i, {
      timeout: 50000,
    });

    expect(comment).toBeTruthy();

    const inputText = screen.getByPlaceholderText(/Escreva um comentário/i);

    fireEvent.changeText(inputText, 'novo comentário');

    fireEvent.press(screen.getByText(/enviar/i));

    const newComment = await screen.findByText(/novo comentário/i, {
      timeout: 50000,
    });
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id', {
      timeout: 50000,
    });

    expect(comments.length).toBe(2);
  });
});
