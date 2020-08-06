import * as React from "react";
import { connect } from "react-redux";

export interface UserInfoImplementationProps {
  openUserMenu: () => void;
  openThreeDots: () => void;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class UserInfoImplementation extends React.Component<
  UserInfoImplementationProps
> {
  render() {
    return <div></div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoImplementation);
