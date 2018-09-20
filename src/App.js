import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div style={{ textAlign: "center" }}>
          {response ? <p>Change</p> : <p>Loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
