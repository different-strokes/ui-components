import React from 'react';
import PropTypes from 'prop-types';
// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

var UiText = function UiText(_ref) {
  var text = _ref.text,
      theme = _ref.theme;
  return React.createElement(
    'p',
    { className: theme.root },
    text
  );
};

UiText.propTypes = {
  // text: articleComponentPropTypes.text.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    root: PropTypes.string
  }).isRequired
};

UiText.defaultProps = {
  theme: {},
  text: ''
};

export default UiText;
//# sourceMappingURL=UiText.js.map