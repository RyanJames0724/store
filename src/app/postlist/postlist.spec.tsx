import { render } from '@testing-library/react';

import Postlist from './postlist';

describe('Postlist', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Postlist />);
    expect(baseElement).toBeTruthy();
  });
});
