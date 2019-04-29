import React, { Component } from 'React'
import axios from 'axios'

class SingleTicket extends Component {
    state = {
        ticket: null
        comments:null;
    }

    componentDidMount() {
        let id = this.props.match.params.ticket_id;
        axios.get('/card/' + id) 
        .then(res => {

        })
        this.setState({
            ticket: res.data
        })
    }

    render () {

        const ticket = this.state.post ? (
            <div className="ticket">
            <h4 className ="center">{this.state.ticket.prob_title}</h4>
            <p>{this.state.ticket.prob_desc}</p>
            </div>
        ) : (
            <div className="center"> Loading Ticket</div>
        )

        return (
            <div className="container">
            <h4>Single Ticket View</h4> 
                {ticket}
            </div>
        )
    }
}

export default SingleTicket;