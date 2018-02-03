import React from 'react';
import PropTypes from 'prop-types';

const UiImage = ({ alt, caption, src, theme }) => (
  <figure className={theme.imageContainer}>
    <img src={src} alt={alt} role="presentation" className={theme.image} />
    {(() => {
      if (caption) {
        return (
          <figcaption className={theme.imageCaption}>
            <p>{caption}</p>
          </figcaption>
        );
      }

      return null;
    })()}
  </figure>
);

UiImage.propTypes = {
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    imageContainer: PropTypes.string,
    image: PropTypes.string,
    imageCaption: PropTypes.string,
  }),
};

UiImage.defaultProps = {
  caption: '',
  theme: {},
};

export default UiImage;
