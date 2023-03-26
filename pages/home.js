import Head from 'next/head';
import Layout from '../components/layout/index.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Receipt Splitter</title>
      </Head>
      <Layout body={"body"} header={"header"} footer={"footer"}/>
    </>
  )
}
