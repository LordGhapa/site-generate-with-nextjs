import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseProps = {
  children: JSX.Element;
  links: MenuLinkProps[];
  footerHtml: string;
  logoData: LogoLinkProps;
};

export const Base = ({
  links = [],
  logoData,
  footerHtml,
  children,
}: BaseProps) => {
  return (
    <>
      <Menu logoData={logoData} links={links} />

      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
