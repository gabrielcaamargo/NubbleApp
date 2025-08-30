import {Post} from '@domain';

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 3,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'this is the text',
  author: {
    id: 2,
    name: 'Maria Júlia',
    profileURL: 'https://example.com',
    userName: 'mariajulia',
  },
};
