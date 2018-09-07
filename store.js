import { createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';



const store = createStore(
  rootReducer,
);


export default  store ;
