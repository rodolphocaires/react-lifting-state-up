import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    return (
        <li>{props.user.username} played {props.hideGames ? '*' : props.user.gamesPlayed} games.</li>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;