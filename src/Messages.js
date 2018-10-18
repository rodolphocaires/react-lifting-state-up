import React from 'react';
import PropTypes from 'prop-types';

const Messages = (props) => {
    setTimeout(() => {
        props.onDismiss();
    }, 3500);

    return (
        <div className={props.type}>
            {props.message}
        </div>
    )
}

Messages.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired
};

export default Messages;