import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import App from './app/App';
import rootReducer from './app/redux/reducers'
import './img/favicon.png';
import jwt_decode from 'jwt-decode';
import setAuthToken from './app/helpers/setAuthToken';
import { setCurrentUser, logoutUser } from './app/redux/actions';



const initialState = {};

const args = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]
  .filter((item => item));

const store = createStore(
  rootReducer,
  initialState,
  compose(...args)
);

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/app/login';
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
