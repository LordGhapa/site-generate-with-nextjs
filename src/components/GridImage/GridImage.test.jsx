// import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render with mock', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render with no background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} grid={undefined} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
