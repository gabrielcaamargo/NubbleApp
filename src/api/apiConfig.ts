import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.RP1_LZiYWjdNnLc6QZ90As3_FGYNDS4TG_0rCmoG5zX-4I4btpXb_miSaA8W',
  },
});
