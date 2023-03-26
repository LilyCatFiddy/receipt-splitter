import Head from 'next/head';
import Layout from '../components/layout';
import PastBills from '../components/pastBills/body';

export default function Home() {
  return (
    <>
      <Head>
        <title>Past Bills</title>
      </Head>
      <Layout 
        body={<PastBills />}
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
