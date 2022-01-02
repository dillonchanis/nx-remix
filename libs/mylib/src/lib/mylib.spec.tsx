import { render } from '@testing-library/react';

import Mylib from './mylib';

describe('Mylib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mylib />);
    expect(baseElement).toBeTruthy();
  });
});
