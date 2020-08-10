import * as React from "react";
import { connect } from "react-redux";

export interface AccountImplementationProps {
  openUserMenu: () => void;
  openThreeDots: () => void;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class AccountImplementation extends React.Component<
  AccountImplementationProps
> {
  render() {
    return <div></div>;
  }
}

export const Account = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountImplementation);
