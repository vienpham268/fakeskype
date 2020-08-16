import * as React from "react";
import { Component } from "react";
import Avatar from "../../Common/Avatar";
import Search from "../../Common/Search";
import Nav from "../../Common/Navigation";

export interface SideBarHeadProps {}

class SideBarHead extends React.Component<SideBarHeadProps> {
  render() {
    return (
      <div className="sidebar-head">
        <Avatar />
        {/* <Search />
        <Nav /> */}
      </div>
    );
  }
}

export default SideBarHead;
