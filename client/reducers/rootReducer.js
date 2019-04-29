import * as types from '../actions/ActionTypes';

const initialState = {
    isAuthenticated: false,
      username: null,
      password: null,
      redirect: false,
      user_id: null,
      session_id: null,
      resolved: false,
      date_time: null,
      tags: {
        HTML:false,
        CSS: false,
        React:false,
        Redux: false,
        PostgreSQL: false,
        Mongo: false,
        Node: false,
        Express: false,
        Webpack: false
        GIT: false,
        Gulp: false,
        Testing: false,
        jQuery: false
  }
}
  
  const rootReducer = (state=initialState, action) => {

     // switch(action.type) {
    //     case types.CREATE_CARD:
    return state;
  }

   
        

export default rootReducer;