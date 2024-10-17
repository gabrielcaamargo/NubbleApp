import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  const response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.lVlnp7yACJFTA-q7v1-7pgivO6GgBLFflOBnzszNCegpEsRut-JTVkQQAdrt',
    },
  });

  const data = await response.json();
  console.log('Data:::', data);

  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
