import React from 'react';
import IUser from 'Models/users';
import Avatar from 'Components/Avatar';
import './styles.css';

function User({ name, email, avatar }: IUser) {
  return (
    <div className="userCmpt">
      <Avatar name={name} email={email} avatar={avatar} />
      <div>
        <div> {name}</div>
        <div> {email}</div>
      </div>
    </div>
  )
}

export default User;