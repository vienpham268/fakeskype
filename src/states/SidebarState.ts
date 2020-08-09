import { UserInterface } from "../interfaces/user";
import { StatusEnum } from "../enums/statusEnum";
import { NavBarEnum } from "../enums/navBarEnum";

export interface SidebarState {
  account: UserInterface;
  tabSelected: NavBarEnum;
  favoritesList?: String[];
  chatList?: String[];
}

export const sidebarState: SidebarState = {
  account: {
    name: "Tri Vien Pham",
    isAccount: true,
    isFriend: false,
    status: StatusEnum.ACTIVE,
  },
  tabSelected: NavBarEnum.CHAT,
};
