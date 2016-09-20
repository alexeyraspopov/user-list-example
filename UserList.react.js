import React from 'react';
import UserListItem from './UserListItem.react';

// This is simple stateless component that maps users list to UI structures
// It uses mandatory `key` attribute which React needs for dealing with list
// updates. Also, `onEdit` and `onDestroy` simply passed down so each user
// list item will call them when needed.
export default function UserList({ users, onEdit, onDestroy }) {
  return (
    <table>
      <tbody>
        {users.map((user, id) => (
          <UserListItem
            key={id}
            user={user}
            onEdit={onEdit}
            onDestroy={onDestroy} />
        ))}
      </tbody>
    </table>
  );
}
