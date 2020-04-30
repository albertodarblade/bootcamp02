import actions from './actions';
import API from 'API/users';
import { Dispatch } from 'redux';
import IUser from 'Models/users';

async function getUsers(dispatch: Dispatch) {
  const users = await API.getUsers();
  const payload = { users };
  dispatch(actions.UPDATE_STATE(payload));
}

async function postUser(dispatch: Dispatch, user: IUser) {
  try {
    await API.postUser(user);
    dispatch(actions.ADD_USER(user));
    dispatch(actions.UPDATE_VIEW({showForm: false}));
  } catch (error) {
    dispatch(actions.UPDATE_STATE({ error }));
  }
}

//TODO les debo typos...
export default function homeMiddleware({dispatch, getState} : any) {
  return (next: any) => (action: any) => {
    switch(action.type) {
      case actions.GET_USERS().type:
        return getUsers(dispatch);
      case actions.POST_USER().type:
        return postUser(dispatch, action.payload);
      default: 
        next(action);
    }
  }
}