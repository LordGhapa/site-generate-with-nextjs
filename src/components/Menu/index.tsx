import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { useState } from 'react';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        onClick={() => setVisible((s) => !s)}
        aria-label="Open/Close-Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close-Menu" />
        ) : (
          <MenuIcon aria-label="Open-Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer onClick={() => setVisible(false)}>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
