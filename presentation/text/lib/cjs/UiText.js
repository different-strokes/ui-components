'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

var UiText = function UiText(_ref) {
  var text = _ref.text,
      theme = _ref.theme;
  return _react2.default.createElement(
    'p',
    { className: theme.root },
    text
  );
};

UiText.propTypes = {
  // text: articleComponentPropTypes.text.isRequired,
  text: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.shape({
    root: _propTypes2.default.string
  }).isRequired
};

UiText.defaultProps = {
  theme: {}
};

exports.default = UiText;
//# sourceMappingURL=UiText.js.map