import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';
import Jumbotron from '../components/jumbotron.js';
import UtilityCard from '../components/UtilityCard.js';
import { useState, useEffect } from 'react';
export default function Home() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    let ToolsState = [];
    ToolsState.push({
      ImageSrc:
        'https://smallpdf.com/build/5ed9c41580b71c419fdceefc39b8fdfe.svg',
      ImageText: 'Split PDF',
      Title: 'Split PDF',
      Description: 'Split PDF into multiple files as per your requirement',
      href: '/splitpdf',
    });

    ToolsState.push({
      ImageSrc:
        'https://smallpdf.com/build/5ed9c41580b71c419fdceefc39b8fdfe.svg',
      ImageText: 'Merge PDF',
      Title: 'Merge PDF',
      Description: 'Merge PDF from multiple files to single PDF',
      href: '/mergepdf',
    });

    setTools(ToolsState);
  }, []);

  return (
    <Layout>
      <Head>
        <title>AIA PDF | One stop solution for all PDF</title>
      </Head>
      <Jumbotron />
      <UtilityCard tools={tools} />
    </Layout>
  );
}
