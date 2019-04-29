import React from 'react'
import { withRouter, Redirect} from 'react-router-dom'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    

    this.handleClick=this.handleClick.bind(this);
    this.buttonClick=this.buttonClick.bind(this);
  }

  buttonClick (event) {
    event.preventDefault();
    let passed = {
      username:event.target.username.value, 
      password:event.target.password.value,
    }
    let that = this;

    axios.post('http://localhost:3000/login', passed)
    .then(function (response) {
      console.log(that.state)

      that.setState({
        id:response.data.id
      }) 
      // https://stackoverflow.com/questions/41466055/how-do-i-pass-state-through-react-router
      that.props.history.push({pathname: '/feed', state:{id:that.state.id}})
    })
    .catch(function (err)  {
      console.log(err);
    })
  }

  handleClick () {
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div>
        <div className='frontBackgroundBox'>
          <h1>Potify</h1>
          <form id='login-post' onSubmit={this.buttonClick}>
            <input name="username" type="text" placeholder="username" id="username"></input>
            <input name="password" type="password" placeholder="password" id="password"></input>
            <br></br>
            <button value="login">Log in</button>
          </form>
            <button onClick={this.handleClick}>Create an account!</button>
          </div>
      </div>
    )
  }
}

export default App;