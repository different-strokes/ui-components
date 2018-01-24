import React from 'react';
import renderer from 'react-test-renderer';

import UiButton from './UiButton';

describe('UiButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UiButton />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
