import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'GithubFinder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
