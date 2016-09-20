import React, { Component } from 'react';
import UserList from './UserList.react';
import Users from './Users';

export default class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onEdit = this.updateUser.bind(this);
    this.onDestroy = this.destroyUser.bind(this);
  }

  async updateUser(user) {
    const users = await Users.update(user.id, user);
    this.setState(() => ({ users }));
  }

  async destroyUser(user) {
    const users = await Users.destroy(user.id, user);
    this.setState(() => ({ users }));
  }

  async componentDidMount() {
    const users = await Users.retrieve();
    this.setState(() => ({ users }));
  }

  render() {
    const users = this.state.users;

    if (!users) {
      return <p>Loading...</p>;
    }

    return (
      <UserList
        users={users}
        onEdit={this.onEdit}
        onDestroy={this.onDestroy} />
    );
  }
}
