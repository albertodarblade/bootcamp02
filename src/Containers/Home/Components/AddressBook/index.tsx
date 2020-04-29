import React, { useState } from 'react';
import IUser from 'Models/users';
import User from 'Components/User';
import Add from '@material-ui/icons/Add';
import UserForm from '../UserForm';
import './styles.css'

function AddressBook({ users, onClickUser, postUser, error } : IProps) {

  // PROBLEM is not you, is meeee...

  // ALL state properties should be in the store.
  // WORK FROM HOME...
  const [showForm, setShowForm] = useState(false);
  function handleCancel() {
    setShowForm(false);
  }

  async function handleInvite(user: IUser) {
    try {
      await postUser(user);
      setShowForm(false);
    } catch (error) {
      console.log(error, 'Error')
      setShowForm(true);
    }

    // works only in the happy path setShowForm(false);
  }

  console.log(error);

  return (
    <section className="addressBookCmpt">
      <label className="title"> Adress Book <Add onClick={() => setShowForm(!showForm)}/> </label>
      {showForm && <UserForm onInvite={handleInvite} onCancel={handleCancel}/>}
      {users.map(user => (
        <div onClick={() => onClickUser(user)} key={user.email}>
          <User {...user} />
        </div>
      ))}
    </section>
  )
}

interface IProps {
  users: IUser[],
  onClickUser: (user: IUser) => void,
  postUser: (user:IUser) => void,
  error: any
}

AddressBook.defaultProps = {
  onClickUser: () => {},
}

export default AddressBook;