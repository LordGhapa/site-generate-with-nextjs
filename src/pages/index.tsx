import React from 'react';
import Home from './../templates/Home/index';
import { loadPages } from '../api/load-page';

export async function getStaticProps() {
  // const data = await loadPages('&filters[id][$in][0]=19');
  let data: any = null;
  try {
    data = await loadPages('&filters[id][$in][0]=19');
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
