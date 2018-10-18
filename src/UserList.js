import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
    propTypes = {
        users: PropTypes.array.isRequired
    }

    state = {
        hideGamesPlayed: false
    }

    toggleGamesPlayed = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            hideGamesPlayed: !prevState.hideGamesPlayed
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleGamesPlayed}>
                    {this.state.hideGamesPlayed ? 'Show games played' : 'Hide games played'}
                </button>
                <ul>
                    {this.props.users.map((user, index) =>
                        <User key={index} user={user} hideGames={this.state.hideGamesPlayed} />
                    )}
                </ul>
            </div>
        )
    }
}

export default UserList;