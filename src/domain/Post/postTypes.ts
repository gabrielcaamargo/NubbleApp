export interface Post {
  id: string;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; // 1;
  image_url: string; // https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg
  is_activated: boolean; // true
  user_id: number; // 1
  is_fixed: false; // false
  meta: {
    comments_count: string; // "10"
    favorite_count: string; // "2"
    like_count: string; // "8"
  };
  status: string; //'published';
  text: string; //'Bom dia!';
  updated_at: string; // '2024-10-17T13:02:58.907-03:00';
  created_at: string; //'2024-10-17T13:02:58.903-03:00';
  user: {
    email: string; // "mariajulia@coffstack.com"
    first_name: string; // "Maria"
    full_name: string; // "Maria Julia"
    id: number; // 1
    is_online: boolean; // false
    last_name: string; // "Julia"
    profile_url: string; // https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png
    username: string; // "mariajulia"
  };
}
