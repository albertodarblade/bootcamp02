// Actions what support my reducer
import actions from './actions';
import IAction from 'Models/action';
import IUser from 'Models/users';
import ITask from 'Models/tasks';
import fakeTasks from './fake';

export const initialState = {
  users: [],
  tasks: fakeTasks,
  currentUser: {
    email: ''
  },
  currentTask: {
    id: ''
  },
  error: undefined,
  view: { showForm: false }
};

function addUser(state: IState, user: IUser) {
  const newUsers = [...state.users];
  newUsers.push(user);
  return { ...state, users: newUsers };
}

function updateState(state: IState, newProps: IState) {
  return { ...state, ...newProps };
}

function removeUser(state: IState, email: string) {
  const newUsers = [...state.users];
  const index = newUsers.findIndex(user => user.email === email);
  if (index >= 0) {
    newUsers.slice(0, index);
  }
  return { ...state, users: newUsers };
}

function updateView(state: IState, payload: IView){
   const newView = {...state.view, ...payload }
   const newState = {...state, view: newView}
   return newState;
}


export default function reducer(state: IState = initialState, action: IAction) {
  const { payload } = action;
  switch (action.type) {
    case actions.UPDATE_STATE(payload).type:
      return updateState(state, payload);
    case actions.ADD_USER(payload).type:
      return addUser(state, payload);
    case actions.REMOVE_USER(payload).type:
      return removeUser(state, payload);
    case actions.UPDATE_VIEW(payload).type:
      return updateView(state, payload);
    default:
      return state;
  }
}

interface IView {
  showForm: boolean
}

interface IState {
  users: IUser[],
  tasks: ITask[],
  currentUser: IUser,
  currentTask: ITask,
  error: any,
  view: IView
}