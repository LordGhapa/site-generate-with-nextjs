import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';

describe('<NavLink />', () => {
  it('should render NavLink with mock', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should NOT render NavLink', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container).toMatchSnapshot();
  });
});
