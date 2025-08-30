import React from 'react';

import {render} from '@testing-library/react-native';

import {Button} from '../Button';

describe('<Button />', () => {
  it('should render component', () => {
    render(<Button title="Button title" />);
  });
});
