import React, { Component } from "react";
import { connect } from "react-redux";

export interface AddChatImplementationProps {
  isOpen: boolean;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export class AddChatImplementation extends Component {
  render() {
    return <div></div>;
  }
}

export const AddChat = connect(mapStateToProps)(AddChatImplementation);
