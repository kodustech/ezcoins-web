import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AvatarSelect from '../AvatarSelect';

describe('testing avatar select component', () => {
  it('should renders without props as expected', () => {
    const { container } = render(<AvatarSelect />);
    expect(container).toMatchSnapshot();
  });

  const id = '1';
  const name = 'testName';
  const onClick = jest.fn();
  let avatarSelect;

  beforeEach(() => {
    avatarSelect = render(
      <AvatarSelect
        name={name}
        data={[
          { id: '1', avatar: 'https://upload.wikimedia.org/wikipedia/pt/c/ce/Aang.png' },
          { id: '2', avatar: 'https://upload.wikimedia.org/wikipedia/pt/c/ce/Aang.png' },
        ]}
        onChange={onClick}
      />,
    );
  });

  it('should renders as expected', () => {
    const { container } = avatarSelect;
    expect(container).toMatchSnapshot();
  });

  it('should calls function onClick on select some avatar', () => {
    const { getByAltText } = avatarSelect;
    fireEvent.click(getByAltText(id));
    expect(onClick.mock.calls.length).toBe(1);
    expect(onClick.mock.calls[0]).toEqual([name, id]);
  });
});
