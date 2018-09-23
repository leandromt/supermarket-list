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
      itemUpdate: null
    };

    // Binds
    this.formChange = this.formChange.bind(this);
    this.formAdd = this.formAdd.bind(this);
    this.openModalEdit = this.openModalEdit.bind(this);
    this.updateItem = this.updateItem.bind(this);

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
        list: resp.data,
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

  formAdd() {
    const nameNewItem = this.state.nameNewItem;
    if (nameNewItem !== "") {
      axios.post(URL_API, { name: nameNewItem }).then(resp => this.getList());
    } else {
      this.setState({ ...this.state, newItemValidation: false });
    }
  }

  render() {
    // Recursive Render Hierarchical List
    const ListRender = ({ items, parentId = null }) => (
      <ul className="list-group">
        {items
          .reverse()
          .filter(item => item.parentId === parentId)
          .map(item => (
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
