export function addToCart(item) {
  return { type: 'ADD_CART_ITEM', payload: item };
}
export function addAnotherCartItem(item) {
  return { type: 'ADD_ANOTHER_CART_ITEM', payload: item };
}

export function removeCartItem(item) {
  return { type: 'REMOVE_CART_ITEM', payload: item };
}
