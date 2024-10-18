import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.CUNmFrIXzyMqy88POemzVSTKj4n2NH65_IWXa5q0un1xja2fonUI6Zhrv4pC',
  },
});
