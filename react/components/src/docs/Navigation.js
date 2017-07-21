import React from 'react';
import PropTypes from 'prop-types';

const NavRow = ({name}) => <li key={name}><a href={`${name}`}>{name}</a></li>;
NavRow.propTypes = {
    name: PropTypes.string.isRequired,
};

const Navigation = ({componentNames}) =>
    <ul className='navigation'>
        {
            componentNames.map(name => <NavRow name={name}/>)
        }
    </ul>;
Navigation.propTypes = {
    componentNames: PropTypes.array.isRequired,
};

export default Navigation;
