export interface User {
   id: string;
   email: string;
   username: string;
   first_name: string;
   last_name: string;
   record_flag: string;
}

export interface UserJWT {
   data: User;
}
