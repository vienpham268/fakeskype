import * as React from "react";
import { connect } from "react-redux";

export interface UserMenuProps {}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export class UserMenuImplementation extends React.Component<UserMenuProps> {
  render() {
    return <div></div>;
  }
}

export const UserMenu = connect(mapStateToProps)(UserMenuImplementation);
