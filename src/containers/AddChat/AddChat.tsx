import * as React from "react";
import { connect } from "react-redux";

export interface AddChatProps {
  isOpen?: boolean;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export class AddChatImplementation extends React.Component<AddChatProps> {
  render() {
    return <div></div>;
  }
}

export const AddChat = connect(mapStateToProps)(AddChatImplementation);
