import store from '../store';

export const simpleAction = () => dispatch => {
  dispatch({
    type: 'ADD_ITEM',
    payload: 'result_of_simple_action'
  });
};
// export const cartAction = payload => ({
//   type: '',
//   payload
// });
