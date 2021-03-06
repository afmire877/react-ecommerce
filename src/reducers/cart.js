import React from 'react';

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CART_ITEM':
      return [...state, payload];
    case 'REMOVE_CART_ITEM':
      let newState = [...state];
      let x = newState.filter(i => i.id !== payload.id);
      console.log(x);
      return x;

      break;
    case 'ADD_ANOTHER_CART_ITEM':
      let stateCopy = [...state];

      let [item] = state.filter(i => i.id === payload.id);
      item.quantity = item.quantity + 1 || 1;
      return [...stateCopy];

    default:
      return state;
  }
};

function insertItem(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
}
function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index);
}
