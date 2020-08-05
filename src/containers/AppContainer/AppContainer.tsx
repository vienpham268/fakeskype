import * as React from "react";
import { connect } from "react-redux";
import {
  SideBar,
  Chat,
  Setting,
  AddChat,
  AddGroup,
  ManageUser,
} from "../../containers";

export interface AppContainerProps {
  history?: any;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class AppContainerImplementation extends React.Component<AppContainerProps> {
  render() {
    return (
      <div className="App-container">
        <SideBar />
        <Chat />
        <Setting />
        <AddChat />
        <AddGroup />
        <ManageUser />
      </div>
    );
  }
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainerImplementation);
