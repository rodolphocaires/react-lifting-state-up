import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import Messages from './Messages';
import UserList from './UserList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
    state = {
        users: [],
        error: {
            message: '',
            display: false
        },
        success: {
            message: '',
            display: false
        }
    }

    userExists = () => {
        alert('Username already exists, choose another one');
    }

    presentError = (message) => {
        this.setState((prevState) => ({
            error: {
                message: message,
                display: true
            }
        }))
    }

    presentSuccess = (message) => {
        this.setState((prevState) => ({
            success: {
                message: message,
                display: true
            }
        }))
    }

    dismissError = () => {
        this.setState(prevState => ({
            error: {
                message: '',
                display: false
            }
        }))
    }

    dismissSuccess = () => {
        this.setState(prevState => ({
            success: {
                message: '',
                display: false
            }
        }))
    }

    handleAddUser = (user) => {
        const hasUser = this.state.users.find(u => u.username === user.username);

        if (hasUser) {
            this.presentError('Username already exists');
        } else {
            this.setState(prevState => ({
                users: [...prevState.users, user]
            }), () => {
                this.presentSuccess('User added successfully');
            });
        }

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                {
                    this.state.error.display
                        ? <Messages
                            message={this.state.error.message}
                            type="message error"
                            onDismiss={this.dismissError} />
                        : ''
                }
                {
                    this.state.success.display
                        ? <Messages
                            message={this.state.success.message}
                            type="message success"
                            onDismiss={this.dismissSuccess} />
                        : ''
                }
                <AddUser onAddUser={this.handleAddUser} />
                {this.state.users.length > 0 ? <UserList users={this.state.users} /> : ''}

            </div>
        );
    }
}

export default App;
