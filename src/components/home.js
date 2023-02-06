import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    if (this.props.user) {
      return (
        <h2>
          Hi {this.props.user.username}
        </h2>
      );
    }
  }
}
