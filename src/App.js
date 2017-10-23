import React, { Component } from 'react';
import User from './user.js';
import './index.css';

class App extends Component {


state = {
  user: {}
}

getUser = () => {
  const name = this.refs.name.value;
  fetch(`http://api.github.com/users/${name}`)
    .then(responce => responce.json())
    .then(data => {
      this.setState({
        user:{
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        }
      })
    })
}

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <input type="text" placeholder="Enter a Username" ref="name"/>
        <button onClick={this.getUser}>Get User Details</button>
        <User user= {user}/>
      </div>
    );
  }
}

export default App;
