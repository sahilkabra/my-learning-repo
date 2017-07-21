import React from 'react';
import PropTypes from 'prop-types';

/** A hello world component */
const HelloWorld = props => <div> Hello {props.message} </div> ;

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string,
};

HelloWorld.defaultProps = {
    message: 'World',
};

export default HelloWorld;
