import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const saveToLocalStorage = state => {
  try {
    const seralizedState = JSON.stringify(state);
    localStorage.setItem('state', seralizedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const seralizedState = localStorage.getItem('state');
    if (seralizedState === null) return undefined;
    return JSON.parse(seralizedState);
  } catch (e) {
    console.log(e);
  }
};

const persistedState = loadFromLocalStorage();

/**
 * @param reducers and
 */
const store = createStore(
  reducers,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
