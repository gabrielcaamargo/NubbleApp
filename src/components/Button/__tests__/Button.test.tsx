import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('should render component', () => {
    render(<Button title="Button title" />);
  });
});
