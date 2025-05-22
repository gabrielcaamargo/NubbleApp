import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;

async function getList(
  post_id: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(post_id, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPost(postCommentAPI);
}

async function remove(postId: number): Promise<string> {
  const response = await postCommentApi.remove(postId);

  return response.message;
}

export const postCommentService = {
  getList,
  create,
  remove,
};
