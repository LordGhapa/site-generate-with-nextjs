import { PageNotFound } from '../../templates/PageNotFound/index';
import Head from 'next/head';
import config from '../../config';
import React from 'react';
export default function Custom404() {
  return (
    <>
      <Head>
        <title>{`404 | ${config.siteName}`}</title>
      </Head>
      <PageNotFound />
    </>
  );
}
