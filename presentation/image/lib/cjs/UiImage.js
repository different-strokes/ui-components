'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UiImage = function UiImage(_ref) {
  var alt = _ref.alt,
      caption = _ref.caption,
      src = _ref.src,
      theme = _ref.theme;
  return _react2.default.createElement(
    'figure',
    { className: theme.imageContainer },
    _react2.default.createElement('img', { src: src, alt: alt, role: 'presentation', className: theme.image }),
    function () {
      if (caption) {
        return _react2.default.createElement(
          'figcaption',
          { className: theme.imageCaption },
          _react2.default.createElement(
            'p',
            null,
            caption
          )
        );
      }

      return null;
    }()
  );
};

UiImage.propTypes = {
  alt: _propTypes2.default.string.isRequired,
  caption: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.shape({
    imageContainer: _propTypes2.default.string,
    image: _propTypes2.default.string,
    imageCaption: _propTypes2.default.string
  })
};

UiImage.defaultProps = {
  caption: '',
  theme: {}
};

exports.default = UiImage;
//# sourceMappingURL=UiImage.js.map