import React from 'react';
import PropTypes from 'prop-types';
// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

var UiText = function UiText(_ref) {
  var text = _ref.text;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'This is UiText. ',
      text
    )
  );
};

UiText.propTypes = {
  // text: articleComponentPropTypes.text.isRequired,
  text: PropTypes.string.isRequired
};

UiText.defaultProps = {};

export default UiText;
//# sourceMappingURL=UiText.js.map