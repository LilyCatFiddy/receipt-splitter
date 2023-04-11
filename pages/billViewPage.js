import Head from 'next/head';
import Layout from '../components/layout'
import Top from '../components/billViewPage/billViewhead'
import Bottom from '../components/billViewPage/billViewBottom'

export default function billViewPage() {
    return (
        <>
            <Head>
                <title>Bill View Page</title>
            </Head>
            <Layout 
                header = {<Top/>}
                body = {<div></div>}
                footer = {<Bottom/>}
            />
        </>
    )
}
