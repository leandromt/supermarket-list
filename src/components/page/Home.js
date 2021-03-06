// Dependencies
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

// Custom Components
import Header from "../template/Header";
import Form from "../template/Form";
import IconButton from "../template/IconButton";
import Modal from "../template/Modal";

// Constants
const URL_API = "http://localhost:3000/categories";
const URL_SOCKET = "http://localhost:3001";

// Component Statefull
class Home extends Component {
  constructor(props) {
    super(props);

    // States
    this.state = {
      response: false,
      endpoint: URL_SOCKET,
      list: [],
      nameNewItem: "",
      newItemValidation: true,
      itemUpdate: null,
      currentSelect: null
    };

    // Binds
    this.formChange = this.formChange.bind(this);
    this.openModalEdit = this.openModalEdit.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.selectChange = this.selectChange.bind(this);

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
        nameNewItem: "",
        list: resp.data.reverse(),
        newItemValidation: true,
        itemUpdate: null
      })
    );
  }

  deleteItem(item) {
    axios.delete(`${URL_API}/${item.id}`).then(res => this.getList());
  }

  openModalEdit(item) {
    this.setState({ ...this.state, itemUpdate: item });
  }

  updateItem(oldData, newData) {
    axios
      .put(`${URL_API}/${oldData.id}`, { name: newData })
      .then(resp => this.getList())
      .catch(error => console.log(error));
  }

  formChange(e) {
    this.setState({
      ...this.state,
      nameNewItem: e.target.value
    });
  }

  selectChange(e) {
    const currentSelect = e.target.value;
    this.setState({ ...this.state, currentSelect });
  }

  formSubmit(e) {
    const data = JSON.stringify({
      name: this.state.nameNewItem,
      parentId:
        this.state.currentSelect === "" || this.state.currentSelect === null
          ? null
          : parseInt("10", this.state.currentSelect)
    });

    if (this.state.nameNewItem !== "") {
      axios
        .post(URL_API, data, {
          headers: { "Content-Type": "application/json" }
        })
        .then(resp => this.getList())
        .catch(error => console.log(error));
    } else {
      this.setState({ ...this.state, newItemValidation: false });
    }

    e.preventDefault();
  }

  render() {
    // Recursive Render Hierarchical List
    const ListRender = ({ items, parentId = null }) => (
      <ul className="list-group">
        {items.filter(item => item.parentId === parentId).map(item => (
          <li className="list-group-item" key={item.id}>
            <span>{item.name}</span>
            <div className="btns-list">
              <IconButton
                color="warning"
                icon="pencil-square-o"
                onClick={() => this.openModalEdit(item)}
                title="Edit this item"
                dataToogle
                dataTarget
              />
              <IconButton
                color="danger"
                icon="trash"
                onClick={() => this.deleteItem(item)}
                title="Remove this item"
              />
            </div>
            {items.find(testItem => testItem.parentId === item.id) && (
              <ListRender items={items} parentId={item.id} />
            )}
          </li>
        ))}
      </ul>
    );
    return (
      <div>
        <Header name="Home" small="MyList" />
        <Form
          formChange={this.formChange}
          formAdd={this.formAdd}
          nameNewItem={this.state.nameNewItem}
          newItemValidation={this.state.newItemValidation}
          list={this.state.list}
          formSubmit={this.formSubmit}
          selectChange={this.selectChange}
        />
        <ListRender items={this.state.list} deleteItem={this.deleteItem} />
        <Modal
          item={this.state.itemUpdate}
          list={this.state.list}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default Home;
