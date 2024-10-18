import {PageAPI} from '@api';
import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.CUNmFrIXzyMqy88POemzVSTKj4n2NH65_IWXa5q0un1xja2fonUI6Zhrv4pC',
    },
  });

  const data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
