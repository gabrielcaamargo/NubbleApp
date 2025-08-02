export interface User {
  id: number; // 1
  firstName: string; // "Maria"
  lastName: string; // "Júlia"
  username: string; // "mariajulia"
  email: string; // "mariajulia@coffstack.com"
  profileUrl: string; // "https://coffstack.com/mariajulia";
  isOnline: boolean; // true
  fullName: string; // "Maria Júlia"
}

export interface UserAPI {
  id: number; // 1
  first_name: string; // "Maria"
  last_name: string; // "Júlia"
  username: string; // "mariajulia"
  email: string; // "mariajulia@coffstack.com"
  profile_url: string; // "https://coffstack.com/mariajulia";
  is_online: boolean; // true
  full_name: string; // "Maria Júlia"
}
