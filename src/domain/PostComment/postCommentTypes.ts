export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
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
  user: {
    id: number; // 1;
    first_name: string; // 'Maria';
    last_name: string; // 'Julia';
    username: string; //'mariajulia';
    email: string; // 'mariajulia@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; // false;
    full_name: string; //'Maria Julia';
  };
  meta: any; //{};
}
