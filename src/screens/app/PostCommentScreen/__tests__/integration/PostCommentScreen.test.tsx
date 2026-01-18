import React from 'react';

import {server} from '@test';
import {renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  it('should render screen', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'postCommentScreen',
          params: {
            postAuthorId: 1,
            postId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentário aleatório/i);
    expect(comment).toBeTruthy();
  });
});
