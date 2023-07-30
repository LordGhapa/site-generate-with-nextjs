import React from 'react';
import { GridContent } from '../../components/GridContent';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { Base } from '../Base';
import Head from 'next/head';
import config from '../../config';

function Home({ data }) {
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
                  <GridTwoColumn {...section} />
                </section>
              );
            }

            if (component === 'section.section-content') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridContent {...section} />
                </section>
              );
            }

            if (component === 'section.section-grid-text') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridText {...section} />
                </section>
              );
            }

            if (component === 'section.section-grid-image') {
              return (
                <section key={key} id={section.sectionId}>
                  <GridImage {...section} />
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
