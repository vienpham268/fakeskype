import { Status } from "../enums/statusEnum";

export interface User {
  name: String;
  email: String;
  mood: String;
  isUser: boolean;
  isFriend: boolean;
  avatar: any;
  status: Status;
}
