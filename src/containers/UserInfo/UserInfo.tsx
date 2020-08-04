import React, { Component } from "react";
import { connect } from "react-redux";

export interface UserInfoProps {}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export class UserInfoImplementation extends Component {
  render() {
    return <div></div>;
  }
}

export const UserInfo = connect(mapStateToProps)(UserInfoImplementation);
