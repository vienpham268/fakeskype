import * as React from "react";
import { connect } from "react-redux";

export interface SignOutProps {}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export class SignOutImplementation extends React.Component<SignOutProps> {
  render() {
    return <div></div>;
  }
}

export const SignOut = connect(mapStateToProps)(SignOutImplementation);
