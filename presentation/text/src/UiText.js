import React from 'react';
import PropTypes from 'prop-types';
// import { articleComponentPropTypes } from '@strokes/article-component-prop-types';

const UiText = ({ text }) => (
  <div>
    <p>This is UiText. {text}</p>
  </div>
);

UiText.propTypes = {
  // text: articleComponentPropTypes.text.isRequired,
  text: PropTypes.string.isRequired,
};

UiText.defaultProps = {};

export default UiText;
