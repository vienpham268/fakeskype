import React, { Component } from "react";
import { connect } from "react-redux";

export interface ChatProps {}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class ChatImplementation extends Component {
  render() {
    return <div></div>;
  }
}

export const Chat = connect(mapStateToProps)(ChatImplementation);
