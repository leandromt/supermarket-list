// Dependencies
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

// Components
import Header from "./Header";
import List from "./List";

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

    socket.on("CATEGORY_CREATED", data => {
      this.getList();
      return this.setState({ response: data });
    });

    socket.on("CATEGORY_UPDATED", data => {
      this.getList();
      return this.setState({ response: data });
    });

    socket.on("CATEGORY_DELETED", data => {
      this.getList();
      return this.setState({ response: data });
    });
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

  deleteItem(item) {
    //axios.delete(`${URL}/${item._id}`).then(res => this.refresh());
    console.log(item);
    console.log("Remove!");
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <Header name="Home" small="MyList" />

        <div>{response ? <p>Change</p> : <p>Loading...</p>}</div>

        <List list={this.state.list} deleteItem={this.deleteItem} />

        <hr />
      </div>
    );
  }
}

export default Home;
