import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.VCpiYbegh9thnNd0WOFPMna_ToSb7J2dsXXIUpYsaCF84IuJO7IPkzuFlV1P',
  },
});
