/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapSections } from './map-section';
import { mapMenu } from './map-menu';
import { PageData } from '../templates/Home';

export const mapData = (pagesData = [{}] as any) => {
  return pagesData.map((data): PageData => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
