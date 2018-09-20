// Dependencies
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

// Components
import Header from "../template/Header";
import List from "../template/List";
import Form from "../template/Form";

// Constants
const URL_API = "http://localhost:3000/categories";
const URL_SOCKET = "http://localhost:3001";

// Component Statefull
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameNewItem: "",
      response: false,
      endpoint: URL_SOCKET,
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
    axios.get(URL_API).then(resp =>
      this.setState({
        ...this.state,
        list: resp.data
      })
    );
  }

  deleteItem(item) {
    axios.delete(`${URL_API}/${item.id}`).then(res => this.getList());
  }

  formChange(e) {
    this.setState({
      ...this.state,
      nameNewItem: e.target.value
    });
  }

  formAdd() {
    const nameNewItem = this.state.nameNewItem;
    axios.post(URL_API, { name: nameNewItem }).then(resp => this.getList());
  }

  render() {
    return (
      <div>
        <Header name="Home" small="MyList" />
        <Form formChange={this.formChange} formAdd={this.formAdd} />
        <List list={this.state.list} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default Home;
