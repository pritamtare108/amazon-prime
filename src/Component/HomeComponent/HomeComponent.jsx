import React, { Component, Fragment } from "react";
import "./HomeComponent.styles.css";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1> Home Component</h1>
      </Fragment>
    );
  }
}

export default HomeComponent;