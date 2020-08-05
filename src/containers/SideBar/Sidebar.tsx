import * as React from "react";
import { connect } from "react-redux";

export interface SideBarProps {
  selectChatNav?: () => void;
  selectContactNav?: () => void;
  selectNotificationNav?: () => void;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export class SideBarImplementation extends React.Component<SideBarProps> {
  render() {
    return <div className="Sidebar-Container"></div>;
  }
}

export const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarImplementation);
