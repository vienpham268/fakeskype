import { SidebarState, sidebarState } from "./sidebarState";

export interface RootState {
  sidebar: SidebarState;
}

export const rootState: RootState = {
  sidebar: sidebarState,
};
