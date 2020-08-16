import { UserInterface } from "./user";

export interface Group {
  groupName: String;
  groupAvatar?: any;
  groupMember: UserInterface[];
}
