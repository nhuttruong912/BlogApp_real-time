// src/components/UserList.js
import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
