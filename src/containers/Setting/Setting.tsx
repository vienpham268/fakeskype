import * as React from "react";
import { connect } from "react-redux";

export interface SettingImplementationProps {
  isOpen?: boolean;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

class SettingImplementation extends React.Component<
  SettingImplementationProps
> {
  render() {
    return <div></div>;
  }
}

export const Setting = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingImplementation);
