import React from 'react';

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM':
      return [...state, payload];
    case 'REMOVE_ITEM':
      break;
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
