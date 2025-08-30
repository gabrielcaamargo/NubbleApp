import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: () => ({navigate: mockedNavigate}),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not show the comment link if it has no comments', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/i);
    expect(commentLinkElement).toBeFalsy();
  });

  it('show a single comment if comment count is 1', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);

    const commentLinkElement = screen.getByText(/ver comentário/i);
    expect(commentLinkElement).toBeTruthy();
  });

  it('navigates to the PostCommentScreen when the comment link is pressed', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comentários/i);
    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
