import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = ({ links }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {links.map((link, index) => (
          <li key={index} className="navigation-item">
            <a href={link.url} className="navigation-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
