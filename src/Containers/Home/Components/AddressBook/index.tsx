import React, { useState } from 'react';
import IUser from 'Models/users';
import User from 'Components/User';
import Add from '@material-ui/icons/Add';
import UserForm from '../UserForm';
import withFilter from 'Hoc/withFilter';
import classnames from 'classnames';
import './styles.css'

//receive readOnly property
// readOnly should remove the add functionality of the adress book
function AddressBook({
  users,
  onClickUser,
  postUser,
  error,
  showForm,
  selectedUsers,
  changeStateForm,
  readOnly} : IProps) {

  function handleCancel() {
    changeStateForm(false);
  }

  function handleInvite(user: IUser) {
      postUser(user);
  }


  return (
    <section className="addressBookCmpt">
      {!readOnly && <label className="title"> Adress Book <Add onClick={() => changeStateForm(!showForm)}/> </label>}
      {console.log(showForm)}
      {showForm && <UserForm onInvite={handleInvite} onCancel={handleCancel}/>}
      {users.map(user => {

        const userClassnames = classnames({
          user: true,
          active: selectedUsers.find(selected => selected === user.email),
        })
        return (
          <div onClick={() => {onClickUser(user)} } className={userClassnames} key={user.email}>
            <User {...user} />
          </div>
        )
      })}
    </section>
  )
}

interface IProps {
  users: IUser[],
  onClickUser: (user: IUser) => void,
  postUser: (user:IUser) => void,
  error: any,
  showForm: boolean,
  changeStateForm:(showForm: boolean) => void,
  readOnly:Boolean,
  selectedUsers: string[]
}

AddressBook.defaultProps = {
  onClickUser: () => {},
  selectedUsers: []
}

const userFilterCriteria = ( value :string) => {
  return (item:IUser)=>{
      if(!item) {
          return true;
        }
        return (item.name && item.name.includes(value)) || (item.email && item.email.includes(value)) };
  };



export default withFilter(AddressBook, {keyCollection: 'users', criteria: userFilterCriteria});