import Head from 'next/head';

const index = (props) => {
    return (
        <Head>
            <title>{props.title}</title>

        </Head>
    )
}

export default index;