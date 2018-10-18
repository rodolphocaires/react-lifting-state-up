import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        gamesPlayed: 0
    };

    propTyes = {
        onAddUser: PropTypes.func.isRequired
    }

    handleAddUser = (event) => {
        event.preventDefault();
        this.props.onAddUser(this.state);

        this.resetForm();
    }

    updateForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => ({
            [name]: value
        }));
    }

    resetForm = () => {
        this.setState({
            firstname: '',
            lastname: '',
            username: '',
            gamesPlayed: 0
        });
    }

    isValid = () => {
        return this.state.firstname && this.state.lastname && this.state.username;
    }

    render() {
        return (
            <form onSubmit={this.handleAddUser}>
                <input type="text" placeholder="First name" value={this.state.firstname} onChange={this.updateForm} name="firstname" />
                <input type="text" placeholder="Last name" value={this.state.lastname} onChange={this.updateForm} name="lastname" />
                <input maxLength="18" type="text" placeholder="Username" value={this.state.username} onChange={this.updateForm} name="username" />
                <button type="submit" disabled={!this.isValid()}>Add</button>
            </form>
        )
    }
}

export default AddUser;