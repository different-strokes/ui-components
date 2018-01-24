import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme/default.scss';
import {{ componentName }} from '../src';

storiesOf('{{ componentName }}', module)
  .add('Renders in storybook', () => (
    <div>
      <{{ componentName }} theme={theme} />
    </div>
  ));
