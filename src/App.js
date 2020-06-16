import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users:[
            { username : 'Roslyn'},
            { username : 'Oliver'},
            { username : 'James'}
    ]
  }

  eventHandler = (event) =>{
    this.setState({
      users:[
              { username : event.target.value},
              { username : 'Olivia'},
              { username : 'Austin'}
      ]

    });

  }

  render() {

    const style = {
        color: 'red'
    };

    return (
        <div className="App">
          <h1 style={style}> React Basics </h1>
          <UserInput  username={this.state.users[0].username} changed={this.eventHandler} ></UserInput>
          <UserOutput username={this.state.users[0].username} ></UserOutput>
          <UserOutput username={this.state.users[1].username} ></UserOutput>
          <UserOutput username={this.state.users[2].username} ></UserOutput>
        </div>
      );
  }
  
}

export default App;
