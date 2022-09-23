import Head from 'next/head';
import React from 'react';

type SeoProps = {
    title: string,
    description?: string
}

const Seo = ({title, description}: SeoProps) => {
  return (
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="description" content={description ? description : ""}/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </Head>
  );
};

export default Seo;