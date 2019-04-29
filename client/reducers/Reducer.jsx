import * as types from '../actions/actionTypes';

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
    if(action.type === 'CREATE_TICKET'){
      const newTicket = {
        username,
        user_id,
        prob_desc,
        prob_title,
        tags: newTicketTags,
        resolved: false,
      }
      tickets = state.tickets.slice();
      tickets.push(newTicket)
      return {
        ...state,
        tickets,
      };
    };
  };

const commentCreator = (state = initialState, action) => {
  if(action.type === 'CREATE_COMMENT') {
    const newComment = {
      username,
      user_id,
      ticket_id,
      comment_desc,
      tickets, 
      correct: false,
    }
    return {
      ...state,
      tickets, 
      resolved,
    }
  }
}
  
const resolvedSelector = (state = initialState, action) => {
  if(action.type === 'SELECT_RESOLVED') {
    const resolver = {
      username,
      user_id,
      ticket_id,
      tickets,
      resolved,
    }
    return {
      ...state,
      tickets,
      resolved: true
    }
  }
}

const filterSelector = (tickets, filter) => {
  switch(filter) {
    case 'all': 
      return tickets;
    case 'status':
      return tickets.filter(tickets => tickets.resolved === true);
    case 'username':
      return tickets.filter(tickets => tickets.username === username);
    case 'date':
      return tickets.filter(tickets => tickets.date === date);
  }
}

export default Reducer;