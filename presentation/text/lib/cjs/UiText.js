'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRenderMarkup = require('react-render-markup');

var _reactRenderMarkup2 = _interopRequireDefault(_reactRenderMarkup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

var UiText = function UiText(_ref) {
  var subtype = _ref.subtype,
      text = _ref.text,
      theme = _ref.theme;

  var markup = (0, _reactRenderMarkup2.default)(text);

  switch (subtype) {
    case 'heading':
      return _react2.default.createElement(
        'h3',
        { className: theme.heading },
        markup
      );

    case 'title':
      return _react2.default.createElement(
        'h1',
        { className: theme.title },
        markup
      );

    case 'blockquote':
      return _react2.default.createElement(
        'blockquote',
        { className: theme.blockquote },
        markup
      );

    case 'default':
    default:
      return _react2.default.createElement(
        'p',
        { className: theme.text },
        markup
      );
  }
};

UiText.propTypes = {
  subtype: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.shape({
    root: _propTypes2.default.string
  }).isRequired
};

UiText.defaultProps = {
  subtype: 'default',
  text: '',
  theme: {}
};

exports.default = UiText;
//# sourceMappingURL=UiText.js.map