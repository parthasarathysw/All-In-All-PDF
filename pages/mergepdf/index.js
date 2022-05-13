import Head from 'next/head';
import Layout from '../../components/layout.js';

import { useState, useEffect } from 'react';
export default function Home() {
  const [tools, setTools] = useState([]);

  return (
    <Layout>
      <Head>
        <title>AIA PDF | Split PDF</title>
      </Head>
      <h2>Merge PDF</h2>
    </Layout>
  );
}
