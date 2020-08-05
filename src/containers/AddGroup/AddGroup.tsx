import * as React from "react";
import { connect } from "react-redux";

export interface AddGroupProps {}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class AddGroupImplementation extends React.Component<AddGroupProps> {
  render() {
    return <div></div>;
  }
}

export const AddGroup = connect(mapStateToProps, mapDispatchToProps)(AddGroupImplementation);
