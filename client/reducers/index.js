import { combineReducers } from 'redux';
import FilterReducer from './FilterReducer.jsx';
import Reducer from './Reduce.jsx'

const reducers = combineReducers({
  tickets: Reducer,
  filters: FilterReducer
})

export default reducers;