import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Feed extends React.Component {
    state = {
        tickets: []
    }


componentDidMount() {
    axios.get('/feed')
    .then(res => {
        console.log(res);
        this.setState({
            tickets: res.data
        })
    })
}

render() {

    const { tickets } = this.state;
    const ticketsList = tickets.length ? (
        tickets.map(ticket => {
          return (
            <div className="Tickets" key={ticket.id}>
              <div className="ticket content">
              <Link to={'/' + ticket.id}>
                <span className="ticket-title">{ticket.prob_title}</span>
              </Link>
                <p>{ticket.prob_datetime}</p>
              </div>
            </div>
          )
        })
    ) : (
        <div className="center"> No Posts Yet</div>
    )

    return (
        <div className = "container">
        <h4 className = "center">Feed</h4>
        {postList}
        </div>
    )
}
}

export default Feed;