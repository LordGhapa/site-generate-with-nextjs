import React from 'react';
import { GridContent, GridContentProps } from '../../components/GridContent';
import {
  GridTwoColumn,
  GridTwoColumnProps,
} from '../../components/GridTwoColumn';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { Base } from '../Base';
import Head from 'next/head';
import config from '../../config';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  menu: LogoLinkProps & { menu_links: MenuLinkProps[] };
  title: string;
  slug: string;
  footerHtml: string;
  sections: SectionProps[];
};
export type SectionProps = (
  | GridImageProps
  | GridContentProps
  | GridTwoColumnProps
  | GridTextProps
) & { component: string; sectionId: string };
export type HomeProps = {
  data: PageData;
};

function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug, title } = data;
  const { menu_links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>{`${title} | ${config.siteName}`}</title>
      </Head>
      <Base
        links={menu_links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        <main>
          {sections.map((section, index) => {
            const { component } = section;
            const key = `${slug}-${index}`;
            if (component === 'section.section-two-columns') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridTwoColumn {...(section as GridTwoColumnProps)} />
                </section>
              );
            }

            if (component === 'section.section-content') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridContent {...(section as GridContentProps)} />
                </section>
              );
            }

            if (component === 'section.section-grid-text') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridText {...(section as GridTextProps)} />
                </section>
              );
            }

            if (component === 'section.section-grid-image') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridImage {...(section as GridImageProps)} />
                </section>
              );
            }
          })}
        </main>
      </Base>
    </>
  );
}

export default Home;
