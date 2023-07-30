import React from 'react';
import { loadPages } from '../api/load-page';
import Home from '../templates/Home';

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'pagina2',
        },
      },
    ],
    fallback: false,
  };
};

export async function getStaticProps() {

  let data: any = null;
  try {
    data = await loadPages('&filters[id][$in][0]=20');
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}

export default function Index({ data }) {
  return <Home data={data} />;
}
