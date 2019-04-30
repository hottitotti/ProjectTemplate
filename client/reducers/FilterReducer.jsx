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