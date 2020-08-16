import { StatusEnum } from "../enums/statusEnum";

export interface UserInterface {
  name: String;
  email?: String;
  mood?: String;
  isAccount: boolean;
  isFriend: boolean;
  avatar?: any;
  status: StatusEnum;
}
