import React from 'react';
import PropTypes from 'prop-types';

// const UserItem = ({ user: { login, avatar_url, html_url } }) => {  //Could use this instead of the way I used

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div>
      <img
        src={avatar_url}
        alt=''
        style={{ width: '60px', borderRadius: '50%' }}
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          style={{
            display: 'inline-block',
            background: 'black',
            padding: '5px',
            borderRadius: '25px',
            width: '50px',
            height: '20px',
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
