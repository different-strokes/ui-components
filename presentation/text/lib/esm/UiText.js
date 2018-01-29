import React from 'react';
import PropTypes from 'prop-types';
import renderMarkup from 'react-render-markup';
// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

var UiText = function UiText(_ref) {
  var subtype = _ref.subtype,
      text = _ref.text,
      theme = _ref.theme;

  var markup = renderMarkup(text);

  switch (subtype) {
    case 'heading':
      return React.createElement(
        'h3',
        { className: theme.heading },
        markup
      );

    case 'title':
      return React.createElement(
        'h1',
        { className: theme.title },
        markup
      );

    case 'blockquote':
      return React.createElement(
        'blockquote',
        { className: theme.blockquote },
        markup
      );

    case 'default':
    default:
      return React.createElement(
        'p',
        { className: theme.text },
        markup
      );
  }
};

UiText.propTypes = {
  subtype: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    root: PropTypes.string
  }).isRequired
};

UiText.defaultProps = {
  subtype: 'default',
  text: '',
  theme: {}
};

export default UiText;
//# sourceMappingURL=UiText.js.map