import * as React from "react";
import { connect } from "react-redux";
import { SidebarState } from "../../states/SidebarState";

export interface SideBarProps {
  openChatNav?: () => void;
  openContactNav?: () => void;
  openNotificationNav?: () => void;
}

const mapStateToProps = ({
  userSignIn: { name, mood, status, avatar },
}: SidebarState) => ({
  name,
  mood,
  status,
  avatar,
});

const mapDispatchToProps = (dispatch: Function) => {};
export class SideBarImplementation extends React.Component<SideBarProps> {
  render() {
    return <div className="Sidebar-Container"></div>;
  }
}

export const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarImplementation);
