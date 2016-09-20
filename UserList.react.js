import React from 'react';
import UserListItem from './UserListItem.react';

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
