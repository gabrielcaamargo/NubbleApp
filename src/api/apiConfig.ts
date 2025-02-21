import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.9ZwHIj6VdlZN-evYFDujRzW-2mM1F9_gpSB2ovkkZ9j2ypNmlPFCJHlUqYNy',
  },
});
