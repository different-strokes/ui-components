import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme/default.scss';
import UiButton from '../src';

storiesOf('UiButton', module)
  .add('Renders in storybook', () => (
    <div>
      <UiButton theme={theme} />
    </div>
  ));
