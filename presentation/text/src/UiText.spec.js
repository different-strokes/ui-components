import React from 'react';
import renderer from 'react-test-renderer';

import UiText from './UiText';

describe('UiText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UiText />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
