import React, { Component } from "react";
import { connect } from "react-redux";

export interface SettingImplementationProps {
  isOpen: boolean;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

class SettingImplementation extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingImplementation);
