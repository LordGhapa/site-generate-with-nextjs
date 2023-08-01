import React from 'react';
import { loadPages } from '../api/load-page';
import Home, { HomeProps } from '../templates/Home';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;
  try {
    data = await loadPages('&filters[id][$in][0]=20');
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
  return { props: { data } };
};

export default function Index({ data }: HomeProps) {
  return <Home data={data} />;
}
