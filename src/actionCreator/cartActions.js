export function addToCart(item) {
  return { type: 'ADD_CART_ITEM', payload: item };
}
export function addAnotherCartItem(item) {
  return { type: 'ADD_ANOTHER_CART_ITEM', payload: item };
}

export function deleteCartItem(item) {
  return { type: 'DELETE_CART_ITEM', payload: item };
}
