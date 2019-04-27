import React from 'react'
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom'



class Signup extends React.Component {
  constructor(props) {
    super(props);

  this.buttonClick=this.buttonClick.bind(this);
  }
  buttonClick (event) {
    event.preventDefault();
    let passed = {
      username:event.target.username.value, 
      password:event.target.password.value,
    }

    let that = this;

    axios.post('http://localhost:3000/signup', passed)
    .then(function (response) {
      console.log("successfully passed!")
      // return <Redirect to='/' />
    })
    .then(function (err)  {
      console.log(err);
      // return <Redirect to='/signup'/>
    })
  }

  render() {
    return (
      <div>
      <div className='frontBackgroundBox'>
        <h1>Signup</h1>
        <form id='sign-up-post' onSubmit={this.buttonClick}>
            <input name="username" type="text" placeholder="username" id="username"></input>
            <input name="password" type="password" placeholder="password" id="password"></input>
            <button value="sign-up">Sign up</button>
          </form>
      </div>
    </div>
    )
  }
}
export default withRouter(Signup)