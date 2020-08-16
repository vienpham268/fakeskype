import { UserInterface } from "../interfaces/user";
import { StatusEnum } from "../enums/statusEnum";

export interface SidebarState {
  user: UserInterface;
}

export const sidebarState: SidebarState = {
  user: {
    name: "Tri Vien Pham",
    isAccount: true,
    isFriend: false,
    status: StatusEnum.ACTIVE,
  },
};
