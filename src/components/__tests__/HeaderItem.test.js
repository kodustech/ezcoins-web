import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

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

  it('should renders with props as expected', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderItem path="test" title="Test" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('on press link should navigate to path', () => {
    const history = createMemoryHistory();
    const {
      container: { firstChild },
    } = render(
      <Router history={history}>
        <HeaderItem path="test" title="Test" />
      </Router>,
    );

    fireEvent.click(firstChild);

    expect(history.location.pathname).toBe('/test');
  });
});
