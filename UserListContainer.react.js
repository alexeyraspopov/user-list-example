import React, { Component } from 'react';
import UserList from './UserList.react';
import Users from './Users';

// This stateful component maps users collection to its state and provides
// event hooks that are calling methods from Users API. Once users collection
// is updated, the component updates its state and shows updated list.
// On the UI, React will update only necessary things.
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
