import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme/default.scss';
import UiImage from '../src';

storiesOf('UiImage', module)
  .add('simple image', () => (
    <div>
      <UiImage
        alt="LOL"
        src="https://memeguy.com/photos/images/the-only-lolcat-to-ever-make-me-literally-lol-17667.jpg"
        theme={theme}
      />
    </div>
  ))
  .add('with caption', () => (
    <div>
      <UiImage
        alt="LOL"
        src="https://memeguy.com/photos/images/the-only-lolcat-to-ever-make-me-literally-lol-17667.jpg"
        theme={theme}
        caption="Magic legs"
      />
    </div>
  ));
