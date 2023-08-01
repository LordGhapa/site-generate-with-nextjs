import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main Menu">
      {links.map((link) => (
        <MenuLink {...link} key={link.link} />
      ))}
    </Styled.Container>
  );
};
