import { render } from '@testing-library/react';

import Postform from './postform';

describe('Postform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Postform />);
    expect(baseElement).toBeTruthy();
  });
});
