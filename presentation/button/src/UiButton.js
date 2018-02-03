import React from 'react';
import PropTypes from 'prop-types';

const UiButton = ({ onClick, text, theme }) => (
  <button onClick={onClick} className={theme.button}>
    {text}
  </button>
);

UiButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  theme: PropTypes.shape({
    button: PropTypes.string,
  }),
};

UiButton.defaultProps = {
  onClick: function noop() {},
  theme: {},
};

export default UiButton;
