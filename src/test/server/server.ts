import {setupServer} from 'msw/node';

import {postCommentHandlers} from './PostComment/postCommentHandler';
import {userHandlers} from './User/userHandler';

export const server = setupServer(...postCommentHandlers, ...userHandlers);

export {mockedData as mockedPostComment} from './PostComment/mocks';
export {resetInMemoryResponse} from './PostComment/postCommentHandler';
export {userMocked} from './User/userMocked';
