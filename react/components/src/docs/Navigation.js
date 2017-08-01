import React from 'react';
import PropTypes from 'prop-types';

const NavRow = ({name}) => <li><a href={`${name}`}>{name}</a></li>;
NavRow.propTypes = {
    name: PropTypes.string.isRequired,
};

const Navigation = ({componentNames}) =>
    <ul className='navigation'>
        {
            componentNames.map(name => <NavRow key={name} name={name}/>)
        }
    </ul>;
Navigation.propTypes = {
    componentNames: PropTypes.array.isRequired,
};

export default Navigation;
