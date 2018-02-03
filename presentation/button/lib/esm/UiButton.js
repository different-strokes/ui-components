import React from 'react';
import PropTypes from 'prop-types';

var UiButton = function UiButton(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      theme = _ref.theme;
  return React.createElement(
    'button',
    { onClick: onClick, className: theme.button },
    text
  );
};

UiButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
  theme: PropTypes.shape({
    button: PropTypes.string
  })
};

UiButton.defaultProps = {
  onClick: function noop() {},
  theme: {}
};

export default UiButton;
//# sourceMappingURL=UiButton.js.map