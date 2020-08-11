import { UserInterface } from "../interfaces/user";
import { StatusEnum } from "../enums/statusEnum";

export interface SidebarState {
  userSignIn: UserInterface;
}

export const sidebarState: SidebarState = {
  userSignIn: {
    name: "Tri Vien Pham",
    isAccount: true,
    isFriend: false,
    status: StatusEnum.ACTIVE,
  },
};
