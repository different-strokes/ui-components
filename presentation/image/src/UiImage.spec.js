import React from 'react';
import renderer from 'react-test-renderer';

import UiImage from './UiImage';

describe('UiImage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UiImage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
