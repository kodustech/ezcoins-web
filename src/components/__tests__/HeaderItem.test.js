import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import HeaderItem from '../HeaderItem';

describe('testing header item component', () => {
  it('should renders without props as expected', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderItem />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
