import React, { Component } from "react";
import { connect } from "react-redux";

export interface SideBarProps {
  selectChatNav: () => void;
  selectContactNav: () => void;
  selectNotificationNav: () => void;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export class SideBarImplementation extends Component {
  render() {
    return <div></div>;
  }
}

export const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarImplementation);
