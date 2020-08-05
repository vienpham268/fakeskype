import * as React from "react";
import { connect } from "react-redux";

export interface ManageUserProps {}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export class ManageUserImplementation extends React.Component<ManageUserProps> {
  render() {
    return <div></div>;
  }
}

export const ManageUser = connect(mapStateToProps)(ManageUserImplementation);
