import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({ text }) => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p className="loading-text">{text}</p>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
