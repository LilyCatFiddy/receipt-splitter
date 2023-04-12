import Head from 'next/head';
import Layout from '../components/layout'
import EditTop from '../components/billViewPage/billViewheadEdit'
import EditBottom from '../components/billViewPage/billViewBottomEdit'
import Top from '../components/billViewPage/billViewhead'

export default function billViewPage() {
    return (
        <>
            <Head>
                <title>Bill View Page</title>
            </Head>
            <Layout 
                header = {<Top/>}
                body = {<div></div>}
                footer = {<EditBottom/>}
            />
        </>
    )
}
