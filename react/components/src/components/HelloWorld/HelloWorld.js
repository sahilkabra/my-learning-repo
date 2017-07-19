import React from 'react';

const HelloWorld = props => <div> Hello {props.message} </div>;
HelloWorld.propTypes = {
    message: React.PropTypes.string,
};

export default HelloWorld;
