import { render } from '@testing-library/react';

import Postslice from './postslice';

describe('Postslice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Postslice />);
    expect(baseElement).toBeTruthy();
  });
});
