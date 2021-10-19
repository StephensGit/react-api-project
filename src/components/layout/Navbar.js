import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
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
