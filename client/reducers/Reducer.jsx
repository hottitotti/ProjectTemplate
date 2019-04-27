import * as types from '../actions/actionTypes';

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
  };
  
  const marketsReducer = (state=initialState, action) => {
    let marketList;

    switch(action.type) {
        case types.CREATE_CARD:
        