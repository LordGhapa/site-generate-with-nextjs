/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home';

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: {
      data: {
        attributes: { url: srcImg = '' },
      },
    } = '',
    menu_links: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    srcImg,
    menu_links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []): MenuLinkProps[] => {
  return links.map((item): MenuLinkProps => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
