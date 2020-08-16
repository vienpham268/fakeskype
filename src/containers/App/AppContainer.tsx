import * as React from "react";
import { Component } from "react";
import { SideBar } from "../SideBar";

export interface AppContainerProps {
  history: any;
}

class AppContainer extends React.Component<AppContainerProps> {
  render() {
    return <SideBar />;
  }
}

export default AppContainer;
