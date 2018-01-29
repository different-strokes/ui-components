import React from 'react';
import PropTypes from 'prop-types';
// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

const UiText = ({ text, theme }) => (
  <p className={theme.root}>{text}</p>
);

UiText.propTypes = {
  // text: articleComponentPropTypes.text.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

UiText.defaultProps = {
  theme: {},
  text: '',
};

export default UiText;
