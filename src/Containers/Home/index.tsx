import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddressBook from "./Components/AddressBook";
import { Dialog } from "@material-ui/core";
import IUser from "Models/users";
import UserDetails from "Components/UserDetails";
import Sidebar from "Components/Sidebar";
import actions from "Stores/Home/actions";

/* 
  1hacer dispatch de cualquier action
  2cycle of life component
*/

function Home({ users, getUsers, postUser, error }: IProps) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const [currentUser, setUser] = useState();
  function handleClick(user: IUser) {
    setUser(user);
  }

  return (
    <section className="homeContainer">
      <Dialog open={Boolean(currentUser)} onClose={() => setUser(undefined)}>
        {currentUser && <UserDetails {...currentUser} />}
      </Dialog>
      <Sidebar>
        <AddressBook error={error} postUser={postUser} users={users} onClickUser={handleClick} />
      </Sidebar>
    </section>
  );
}

//TODO: typo
function mapStateProps(state: any) {
  return {
    users: state.users,
    error: state.error,
  };
}

function mapDispatchProps(dispatch: any) {
  return {
    getUsers: function () {
      dispatch(actions.GET_USERS());
    },
    postUser: function (user: IUser) {
      return dispatch(actions.POST_USER(user))
    }
  };
}

interface IProps {
  users: IUser[],
  getUsers: any,
  postUser: (user: IUser) => void,
  error: any
}

export default connect(mapStateProps, mapDispatchProps)(Home);
