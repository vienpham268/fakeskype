import * as React from "react";
import { connect } from "react-redux";
import { SidebarState } from "../../states/sidebarState";
import SideBarHead from "../../components/Sidebar/Head/SidebarHead";

export interface SideBarProps {
  openChatNav?: () => void;
  openContactNav?: () => void;
  openNotificationNav?: () => void;
}

const mapStateToProps = ({
  user: { name, mood, status, avatar },
}: SidebarState) => ({
  name,
  mood,
  status,
  avatar,
});

const mapDispatchToProps = (dispatch: Function) => {};
export class SideBarImplementation extends React.Component<SideBarProps> {
  render() {
    return (
      <div className="sidebar">
        <SideBarHead />
      </div>
    );
  }
}

export const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarImplementation);
