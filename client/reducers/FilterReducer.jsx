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

const filterSelector = (state = initialState, filter) => {
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
};

export default FilterReducer;