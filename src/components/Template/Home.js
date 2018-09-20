// Dependencies
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

// Components
import Header from "./Header";

// Constantes
const URL = "http://localhost:3000/categories";

class Home extends Component {
  constructor(props) {
    super(props);

    // Stats
    this.state = {
      response: false,
      endpoint: "http://localhost:3001",
      list: []
    };

    // Initialize
    this.getList();
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("CATEGORY_CREATED", data => this.setState({ response: data }));
    socket.on("CATEGORY_UPDATED", data => this.setState({ response: data }));
    socket.on("CATEGORY_DELETED", data => this.setState({ response: data }));
  }

  getList() {
    console.log("getList");
    axios.get(URL).then(resp =>
      this.setState({
        ...this.state,
        list: resp.data
      })
    );
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
