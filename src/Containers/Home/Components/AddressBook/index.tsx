import React, { useState } from 'react';
import IUser from 'Models/users';
import User from 'Components/User';
import Add from '@material-ui/icons/Add';
import UserForm from '../UserForm';
import './styles.css'

function AddressBook({ users, onClickUser, postUser, error, showForm, changeStateForm} : IProps) {
  console.log(showForm)
  // PROBLEM is not you, is meeee...

  // ALL state properties should be in the store.
  // WORK FROM HOME...
  //const [showForm, setShowForm] = useState(false);
  function handleCancel() {
    changeStateForm(false);
  }

  function handleInvite(user: IUser) {
      postUser(user);
    // works only in the happy path setShowForm(false);
  }


  return (
    <section className="addressBookCmpt">
      <label className="title"> Adress Book <Add onClick={() => changeStateForm(!showForm)}/> </label>
      {console.log(showForm)}
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
  error: any,
  showForm: boolean,
  changeStateForm:(showForm: boolean) => void
}

AddressBook.defaultProps = {
  onClickUser: () => {},
}

export default AddressBook;