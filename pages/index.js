import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';
import Jumbotron from '../components/jumbotron.js';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AIA PDF | One stop solution for all PDF</title>
      </Head>
      <Jumbotron />
    </Layout>
  );
}
