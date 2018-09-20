import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import Header from "./Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://localhost:3001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("CATEGORY_CREATED", data => this.setState({ response: data }));
    socket.on("CATEGORY_UPDATED", data => this.setState({ response: data }));
    socket.on("CATEGORY_DELETED", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <Header name="Home" small="MyList" />

        <div>{response ? <p>Change</p> : <p>Loading...</p>}</div>
      </div>
    );
  }
}

export default Home;
