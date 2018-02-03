import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import theme from '../theme/default.scss';
import UiButton from '../src';

storiesOf('UiButton', module)
  .add('simple button', () => (
    <div>
      <UiButton
        text="Click me!"
        onClick={action('button clicked!')}
        theme={theme}
      />
    </div>
  ));
