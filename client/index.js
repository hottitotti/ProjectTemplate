const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css'); 
// ^this path ???? 

class App extends React.Component {
    render(){
        return (
            <div>
                Hello hot toddlers aka HottiTottiThottiz wooooooo
            </div>
        )
    }
}

 ReactDOM.render(
    <App />,
    document.getElementById('app'),
 )