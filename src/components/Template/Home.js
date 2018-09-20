// Dependencies
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

// Components
import Header from "./Header";
import List from "./List";
import Form from "./Form";

// Constants
const URL = "http://localhost:3000/categories";

// Component Statefull
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      endpoint: "http://localhost:3001",
      list: []
    };

    // Binds
    this.formChange = this.formChange.bind(this);
    this.formAdd = this.formAdd.bind(this);

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

  formChange() {
    console.log("Forme change");
  }

  formAdd() {
    console.log("Forme Add");
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <Header name="Home" small="MyList" />
        <Form formChange={this.formChange} formAdd={this.formAdd} />
        <List list={this.state.list} deleteItem={this.deleteItem} />

        <div>{response ? <p>Change</p> : <p>Loading...</p>}</div>

        <hr />
      </div>
    );
  }
}

export default Home;