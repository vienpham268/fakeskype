import React, { Component } from "react";
import Sidebar from "../SideBar/Sidebar";
import Chat from "../Chat/Chat";
import Setting from "../Setting/Setting";
import AddChat from "../AddChat/AddChat";
import AddGroup from "../AddGroup/AddGroup";

export interface AppContainerProps {
  history: any;
}

class AppContainer extends React.Component<AppContainerProps> {
  render() {
    const { history } = this.props;
    return (
      <div className="App-container">
        <Sidebar />
        <Chat />
        <Setting />
        <AddChat />
        <AddGroup />
      </div>
    );
  }
}

export default AppContainer;
