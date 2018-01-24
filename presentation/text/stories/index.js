import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme/default.scss';
import UiText from '../src';

storiesOf('UiText', module)
  .add('Renders in storybook', () => (
    <div>
      <UiText theme={theme} />
    </div>
  ));
