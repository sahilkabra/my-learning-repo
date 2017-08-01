import React from 'react';
import PropTypes from 'prop-types';

import CodeExample from './CodeExample';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showCode: false};
    }

    toggleCode = event => {
        event.preventDefault();
        this.setState(prevState => {
            return {showCode: !prevState.showCode};
        });
    }

    render() {
        const {showCode} = this.state;
        const {code, description, name} = this.props.example;
        const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
        return (
            <div className='example'>
                {description && <h4>{description}</h4>}
                <ExampleComponent/>
                <p>
                    <button onClick={this.toggleCode}>
                        {showCode? 'Hide' : 'Show'} Code
                    </button>
                </p>
                {showCode && <CodeExample>{code}</CodeExample>}
            </div>
        );
    }
}

Example.propTypes = {
    example: PropTypes.object.isRequired,
    componentName: PropTypes.string.isRequired,
};

export default Example;
