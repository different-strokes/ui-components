import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var UiText = function (_Component) {
  _inherits(UiText, _Component);

  function UiText() {
    _classCallCheck(this, UiText);

    return _possibleConstructorReturn(this, (UiText.__proto__ || _Object$getPrototypeOf(UiText)).apply(this, arguments));
  }

  _createClass(UiText, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'This is UiText'
        )
      );
    }
  }]);

  return UiText;
}(Component);

UiText.propTypes = {};

UiText.defaultProps = {};

export default UiText;
//# sourceMappingURL=UiText.js.map