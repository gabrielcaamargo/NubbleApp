import {PageAPI} from '@api';
import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.lVlnp7yACJFTA-q7v1-7pgivO6GgBLFflOBnzszNCegpEsRut-JTVkQQAdrt',
    },
  });

  const data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
