import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
  title,
}) => {
  return (
    <Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
      {title}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['huge', 'large', 'medium', 'small']),
  uppercase: P.bool,
  title: P.string,
};
