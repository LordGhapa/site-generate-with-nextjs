/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridImageElProps, GridImageProps } from '../components/GridImage';
import { GridTextProps } from '../components/GridText';
import { GridContentProps } from '../components/GridContent';
import { GridTwoColumnProps } from '../components/GridTwoColumn';
import { SectionProps } from '../templates/Home';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnProps & { component: string; sectionId: string } => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = {} } = {} } = '',
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};
export const mapSectionContent = (
  section = {} as any,
): GridContentProps & { component: string; sectionId: string } => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { section_id: sectionId = '', background = false } = '',
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};
export const mapTextGrid = (
  section = {} as any,
): GridTextProps & { component: string; sectionId: string } => {
  const {
    title = '',
    description = '',
    metadata: { section_id: sectionId = '', background = false } = '',
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};
export const mapImageGrid = (
  section = {} as any,
): GridImageProps & { component: string; sectionId: string } => {
  const {
    title = '',
    description = '',
    metadata: { section_id: sectionId = '', background = false } = '',
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img): GridImageElProps => {
      const { url: srcImg = '', alternativeText: altText = '' } =
        img.image?.data[0]?.attributes ?? {};
      return {
        srcImg,
        altText,
      };
    }),
  };
};
