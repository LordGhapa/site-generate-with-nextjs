/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { Heading } from '../../components/Heading';

import { GridContent } from '../../components/GridContent';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';

import config from '../../config';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    // const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    // const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url);
        const json = await data.json();

        const pageData = mapData([json.data[0].attributes]);
        console.log([json.data[0].attributes]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { menu_links, text, link, srcImg } = menu;

  return (
    <Base
      links={menu_links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
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
    </Base>
  );
}

export default Home;
