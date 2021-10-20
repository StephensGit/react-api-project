import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: false });
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }

  // Search Users method, makes a call to endpoint
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Alerts
  setAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 20000);
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
