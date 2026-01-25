import {UserAPI} from '../User';

export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string; // '1h, 2sem'
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 111;
  message: string; //'Cubo delectatio coma cernuus adfero.';
  user_id: number; // 1;
  post_id: number; // 1;
  created_at: string; // '2025-02-19T04:54:48.000-03:00';
  updated_at: string; // '2025-02-21T00:03:27.353-03:00';
  user: UserAPI;
  meta: any; //{};
}
