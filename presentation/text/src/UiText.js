import React from 'react';
import PropTypes from 'prop-types';
import renderMarkup from 'react-render-markup';
// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

const UiText = ({ subtype, text, theme }) => {
  const markup = renderMarkup(text);

  switch (subtype) {
    case 'heading':
      return <h3 className={theme.heading}>{markup}</h3>;

    case 'title':
      return <h1 className={theme.title}>{markup}</h1>;

    case 'blockquote':
      return <blockquote className={theme.blockquote}>{markup}</blockquote>;

    case 'default':
    default:
      return <p className={theme.text}>{markup}</p>;
  }
};

UiText.propTypes = {
  subtype: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

UiText.defaultProps = {
  subtype: 'default',
  text: '',
  theme: {},
};

export default UiText;
