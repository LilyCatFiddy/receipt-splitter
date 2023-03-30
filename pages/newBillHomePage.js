import Head from 'next/head'
import Layout from '../components/layout'
import Body from '../components/newBillHomePage/newBillHomePageBody'

export default function newBillHomePage() {
    return (
        <>
            <Head>
                <title>New Bill Home Page</title>
            </Head>
            <Layout
                header={<div></div>}
                body={<Body/>}
                footer={<div></div>}
            />
        </>
    )
}