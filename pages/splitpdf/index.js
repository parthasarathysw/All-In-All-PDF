import Head from 'next/head';
import Layout from '../../components/layout.js';
import Home from '../../components/split/home.js';
import Range from '../../components/split/range.js';

import { useState, useEffect, useRef } from 'react';

export default function Index() {
  const [SourceFile, setSourceFile] = useState({});
  useEffect(() => {
    //alert(Object.keys(SourceFile).length);
    console.log(SourceFile);
  }, [SourceFile]);
  const page = () => {
    if (Object.keys(SourceFile).length)
      return <Range SetFile={setSourceFile} />;
    else return <Home SetFile={setSourceFile} />;
  };

  return (
    <Layout>
      <Head>
        <title>AIA PDF | Split PDF</title>
      </Head>
      {page()}
    </Layout>
  );
}
