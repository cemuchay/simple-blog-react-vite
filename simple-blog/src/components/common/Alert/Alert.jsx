import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
