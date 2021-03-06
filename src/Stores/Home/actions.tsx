import ActionCreator from 'Helpers/ActionCreator';

const actionCreator = new ActionCreator('Home');

//TODO DEFINE Typo of actions.
export default {
  UPDATE_STATE: (payload: any) => actionCreator.create('UPDATE_STATE', payload),
  ADD_USER: (payload: any) => actionCreator.create('ADD_USER', payload),
  REMOVE_USER: (payload: any) => actionCreator.create('REMOVE_USER', payload),
  UPDATE_VIEW: (payload: any) => actionCreator.create('UPDATE_VIEW', payload),
  /* ASYNC ACTIONS */
  GET_USERS: (payload?: any) => actionCreator.create('GET_USERS', payload),
  POST_USER: (payload?: any) => actionCreator.create('POST_USER', payload),
  GET_TASKS: (payload?: any) => actionCreator.create('GET_TASKS', payload)

}