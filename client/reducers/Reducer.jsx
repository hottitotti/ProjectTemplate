import * as types from '../actions/ActionTypes.jsx';

const initialState = {
    isAuthenticated: false,
      username:"samsilver",
      password:"nullisgreat",
      redirect: false,
      user_id:7,
      session_id:123,
      resolved: false,
      date_time:null,
      tickets: [],
      comments: [],
      ticketId:null,
      tags: {
        HTML:false,
        CSS: false,
        React:false,
        Redux: false,
        PostgreSQL: false,
        Mongo: false,
        Node: false,
        Express: false,
        Webpack: false,
        GIT: false,
        Gulp: false,
        Testing: false,
        jQuery: false
  }
};

  const Reducer = (state = initialState, action) => {
    switch(action.type) {
      case types.CREATE_TICKET: 
        const newTicket = {
          username,
          user_id,
          prob_desc,
          prob_title,
          tags,
          resolved: false,
        };
    
      tickets = state.tickets.slice();
      tickets.push(newTicket)
      return {
        ...state,
        tickets,
      };
      case types.CREATE_COMMENT:
      const newComment = {
        username,
        user_id,
        comment_desc,
        tickets, 
        correct: false,
      };
      comments = state.comments.slice();
      comments.push(newComment)
      return {
        ...state,
        tickets, 
        comments,
        resolved,
      }
      // case types.SELECT_RESOLVED: 
      // const resolver = {
      //   username,
      //   user_id,

      //   tickets,
      //   resolved,
      // };
      // return {
      //   ...state,
      //   tickets,
      //   resolved: true

      // }

      // } //we're not using this right now, so I'm commenting it out. Maybe this could be a stretch feature.

    default: return state;
  }
};

export default Reducer;