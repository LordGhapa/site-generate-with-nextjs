import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Heading>', () => {
  it('should render with default values', () => {
    renderTheme(<Heading title={'texto'} />);

    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });
  it('should render with primary color', () => {
    renderTheme(<Heading colorDark={true} title={'texto'} />);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
    });
  });
  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false} title={'texto'} />);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true} title={'texto'} />);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading sizes small', () => {
    renderTheme(<Heading size="small" title={'texto'} />);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should render correct heading sizes medium', () => {
    renderTheme(<Heading size="medium" title={'texto'} />);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });
  it('should render correct heading sizes large', () => {
    renderTheme(<Heading size="large" title={'texto'} />);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('should render correct font-size when screen less then 768px ', () => {
    renderTheme(<Heading size="huge" title={'texto'} />);

    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });
  it('should render correct heading element ', () => {
    const { container } = renderTheme(<Heading as="h6" title={'texto'} />);
    // const heading = screen.getByRole('heading', { name: 'texto' });
    // screen.debug(container);
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
