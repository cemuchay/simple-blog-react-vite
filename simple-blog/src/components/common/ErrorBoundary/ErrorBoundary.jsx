import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ fallbackComponent: FallbackComponent, children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // You can log the error or perform any other error handling here
      console.error(error, errorInfo);
      setHasError(true);
    };

    // Attach the error handler to the window object
    window.addEventListener('error', errorHandler);

    return () => {
      // Clean up the error handler on unmount
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <FallbackComponent />;
  }

  return children;
};

ErrorBoundary.propTypes = {
  fallbackComponent: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
