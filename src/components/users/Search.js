import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter a user', 'light');
    } else {
      // We need to pass up the value using props, send it using the method searchUsers
      this.props.searchUsers(this.state.text);
      // Clear form after submit
      this.setState({ text: '' });
    }
  };

  onChange = (e) => {
    // Normally you could use this
    // this.setState({ text: e.target.value });
    // However if we'd multiple different fields, and you don't want a seperate onChange for each one
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' value='Search' className='' />
        </form>
        {showClear && (
          <button className='' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
