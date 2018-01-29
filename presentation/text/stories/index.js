import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme/default.scss';
import UiText from '../src';

const singleLine = 'This is a simple text component, and this is mock content to see how it looks in the browser.';
const linesWithMarkup = `${singleLine} <b>This</b> is a <a href="https://google.com">link</a> ${singleLine}`;

storiesOf('UiText', module)
  .add('Short paragraph', () => (
    <div>
      <UiText theme={theme} text={singleLine} />
    </div>
  ))
  .add('Paragraph with multiple lines', () => (
    <div>
      <UiText theme={theme} text={singleLine} />
      <UiText theme={theme} text={singleLine} />
      <UiText theme={theme} text={singleLine} />
    </div>
  ))
  .add('Paragraph with markup', () => (
    <div>
      <UiText theme={theme} text={linesWithMarkup} />
    </div>
  ));
