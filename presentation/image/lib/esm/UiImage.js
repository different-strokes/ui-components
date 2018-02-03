import React from 'react';
import PropTypes from 'prop-types';

var UiImage = function UiImage(_ref) {
  var alt = _ref.alt,
      caption = _ref.caption,
      src = _ref.src,
      theme = _ref.theme;
  return React.createElement(
    'figure',
    { className: theme.imageContainer },
    React.createElement('img', { src: src, alt: alt, role: 'presentation', className: theme.image }),
    function () {
      if (caption) {
        return React.createElement(
          'figcaption',
          { className: theme.imageCaption },
          React.createElement(
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
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    imageContainer: PropTypes.string,
    image: PropTypes.string,
    imageCaption: PropTypes.string
  })
};

UiImage.defaultProps = {
  caption: '',
  theme: {}
};

export default UiImage;
//# sourceMappingURL=UiImage.js.map