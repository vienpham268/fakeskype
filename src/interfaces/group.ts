import { User } from "./user";

export interface Group {
  groupName: String;
  groupAvatar?: any;
  groupMember: User[];
}
