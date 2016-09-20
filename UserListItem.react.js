import React, { Component } from 'react';

// Even though this component represents small piece of UI, it has its own
// state which we don't need to store anywhere outside. `UserListItem` can be
// in viewing or editing mode. Based on this state, it will just show user
// data and buttons for Edit and Destroy operations, or input fields that
// allow you to update data and submit changes to the users collection
// (using Users API).
export default class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      user: props.user,
    };
  }

  toggleEditMode() {
    this.setState(() => ({ isEditing: !this.state.isEditing }));
  }

  updateField(field, value) {
    const user = this.state.user.set(field, value);
    this.setState(() => ({ user }));
  }

  async submitChanges(user) {
    await this.props.onEdit(user);
    this.toggleEditMode();
  }

  cancelEdit() {
    this.setState(() => ({
      isEditing: false,
      user: this.props.user,
    }));
  }

  renderControls() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={() => this.submitChanges(this.state.user)}>Submit</button>
          <button onClick={() => this.cancelEdit()}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button onClick={() => this.toggleEditMode()}>Edit</button>
        <button onClick={() => this.props.onDestroy(this.state.user)}>Delete</button>
      </td>
    );
  }

  renderUserField(field) {
    const value = this.state.user.get(field);

    if (this.state.isEditing) {
      const onChange = event => this.updateField(field, event.target.value);
      return <input value={value} onChange={onChange} />;
    }

    return <span>{value}</span>;
  }

  render() {
    return (
      <tr>
        <td>{this.renderUserField('firstName')}</td>
        <td>{this.renderUserField('lastName')}</td>
        {this.renderControls()}
      </tr>
    );
  }
}
