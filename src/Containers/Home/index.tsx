import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddressBook from "./Components/AddressBook";
import { Dialog } from "@material-ui/core";
import IUser from "Models/users";
import UserDetails from "Components/UserDetails";
import Sidebar from "Components/Sidebar";
import actions from "Stores/Home/actions";
import TaskList from "./Components/TaskList";
import './styles.css';
import ITask from "Models/tasks";
import InlineInput from 'Components/InlineInput';

/* 
  1hacer dispatch de cualquier action
  2cycle of life component
*/

function Home({ users, tasks, getUsers, postUser, error, showForm, changeStateForm }: IProps) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  //TODO REMOVE THIS STATE SHOULD BE HANDLED IN THE STORE.
  const [currentUser, setUser] = useState();
  const [search, setSearch] = useState('');
  function handleClick(user: IUser) {
    setUser(user);
  }

  function handleSearch(searchValue: any) {
    console.log(searchValue);
    setSearch(searchValue);
  }

  function handleSearch2(value: any) {
    console.log(value);
  }

  return (
    <section className="homeContainer">
      <Dialog open={Boolean(currentUser)} onClose={() => setUser(undefined)}>
        {currentUser && <UserDetails {...currentUser} />}
      </Dialog>
      <section className="taskSection">
        <InlineInput placeholder="Search..." onChange={handleSearch} />
        <InlineInput placeholder="Search2..." readOnly onChange={handleSearch2}  value="Hola mundo test 2"/>

        <div>{search}</div>
        <TaskList tasks={tasks} />
      </section>
      <Sidebar>
        <AddressBook 
          showForm={showForm}
          changeStateForm={changeStateForm}
          error={error}
          postUser={postUser}
          users={users}
          onClickUser={handleClick} />
      </Sidebar>
    </section>
  );
}

//TODO: typo
function mapStateProps(state: any) {
  return {
    tasks: state.tasks,
    users: state.users,
    error: state.error,
    showForm: state.view.showForm
  };
}

function mapDispatchProps(dispatch: any) {
  return {
    getUsers: function () {
      dispatch(actions.GET_USERS());
    },
    getTasks: function () {
      dispatch(actions.GET_TASKS())
    },
    postUser: function (user: IUser) {
      return dispatch(actions.POST_USER(user))
    },
    changeStateForm: function (showForm: boolean){
      dispatch(actions.UPDATE_VIEW({showForm}))
    }
  };
}

interface IProps {
  users: IUser[],
  tasks: ITask[],
  getUsers: any,
  postUser: (user: IUser) => void,
  error: any,
  showForm: boolean,
  changeStateForm: (showForm: boolean) => void
}

export default connect(mapStateProps, mapDispatchProps)(Home);
