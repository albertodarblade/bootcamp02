import React from 'react';
import IUser from 'Models/users';

function UserDetails({ name, email } : IUser ) {

  return (
    <section className="userDetailCmpt">
      <div>{name}</div>
      <div>{email}</div>
    </section>
  )
}

export default UserDetails;