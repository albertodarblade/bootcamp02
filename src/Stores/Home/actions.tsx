import ActionCreator from 'Helpers/ActionCreator';

const actionCreator = new ActionCreator('Home');

export default {
  UPDATE_STATE: (payload: any) => actionCreator.create('UPDATE_STATE', payload),
  ADD_USER: (payload: any) => actionCreator.create('ADD_USER', payload),
  REMOVE_USER: (payload: any) => actionCreator.create('REMOVE_USER', payload),
  /* ASYNC ACTIONS */
  GET_USERS: (payload?: any) => actionCreator.create('GET_USERS', payload),
  POST_USER: (payload?: any) => actionCreator.create('POST_USER', payload),
}