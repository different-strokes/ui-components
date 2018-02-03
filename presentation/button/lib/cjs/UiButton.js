'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UiButton = function UiButton(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      theme = _ref.theme;
  return _react2.default.createElement(
    'button',
    { onClick: onClick, className: theme.button },
    text
  );
};

UiButton.propTypes = {
  onClick: _propTypes2.default.func,
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  theme: _propTypes2.default.shape({
    button: _propTypes2.default.string
  })
};

UiButton.defaultProps = {
  onClick: function noop() {},
  theme: {}
};

exports.default = UiButton;
//# sourceMappingURL=UiButton.js.map