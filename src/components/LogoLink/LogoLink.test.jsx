import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Texto logo" />);
    const heading = screen.getByRole('heading', { name: 'Texto logo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Texto logo" srcImg="img.png" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'img.png');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Texto logo" srcImg="img.png" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
