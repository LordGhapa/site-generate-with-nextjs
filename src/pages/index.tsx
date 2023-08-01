import React from 'react';
import Home, { HomeProps } from './../templates/Home/index';
import { loadPages } from '../api/load-page';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;
  try {
    data = await loadPages('&filters[id][$in][0]=19');
  } catch (e) {
    console.log('ERRO NA API', e);
    return {
      notFound: true,
    };
  }

  return { props: { data } };
};

export default function Index({ data }: HomeProps) {
  return <Home data={data} />;
}
