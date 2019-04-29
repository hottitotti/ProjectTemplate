import React, { PropTypes } from 'react';
const ReactDOM = require('react-dom');
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import Feed from '/components/Feed'
import SingleTicket from './components/SingleTicketViewer'

require('./index.css'); 

// <ul id="uList">
//           <li className="list">
//           <Link to="/" className='nav-bar'>Home</Link>
//           </li>
//           <li className="list">
//           <Link to="/signup" className='nav-bar'>Signup</Link>
//           </li>
//           <li className="list">
//           <Link to="/garden" className='nav-bar'>Garden</Link>
//           </li>
         
//         </ul>

// <Route exact path="/" component={App}/>
{/* <Route exact path="/signup" component={Signup} />
<Route exact path="/garden" component={Garden} /> */}

const Root = ({ store }) => (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/:filter?" component={App} />
        <Route path="/feed" component={Feed} />
        <Route path="/:ticket_id" component={SingleTicket}/>
      </Router>
    </Provider>
  )

  Root.propTypes = {
    store: PropTypes.object.isRequired
  }

  export default Root

