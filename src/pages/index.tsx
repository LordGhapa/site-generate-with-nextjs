import React from 'react';
import { Teste } from '../../components/Teste';
import config from '../config';
import { mapData } from './../api/map-data';
import Home from './../templates/Home/index';

export default function Index({ data }) {
  return <Home data={data} />;
}
export async function getStaticProps() {
  const res = await fetch(config.url);
  const json = await res.json();
  // const data = mapData([json.data[0].attributes]);
  const data = mapData([json.data[0].attributes])[0];

  return { props: { data } };
}
