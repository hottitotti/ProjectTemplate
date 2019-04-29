import * as types from '../actions/ActionTypes.jsx';

const initialState = {
    isAuthenticated: false,
      username,
      password,
      redirect: false,
      user_id,
      session_id,
      resolved: false,
      date_time,
      tickets: [],
      ticketId,
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

  const ticketCreator = (state = initialState, action) => {
    switch(action.type) {
      case types.CREATE_TICKET: 
        const newTicket = {
          username,
          user_id,
          prob_desc,
          prob_title,
          tags: newTicketTags,
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
        ticket_id,
        comment_desc,
        tickets, 
        correct: false,
      };
      return {
        ...state,
        tickets, 
        resolved,
      }
      case types.SELECT_RESOLVED: 
      const resolver = {
        username,
        user_id,
        ticket_id,
        tickets,
        resolved,
      };
      return {
        ...state,
        tickets,
        resolved: true
      }
    
  }
  };

export default Reducer;