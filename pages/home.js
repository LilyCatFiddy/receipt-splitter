import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Receipt Splitter</title>
      </Head>
      <Layout 
        body={"body"}
        header={
          <div className='main-logo'>
            <img src="logo.png" alt="receipt splitter logo"/>
          </div>
        }
        footer={"footer"}
      />
    </>
  )
}
