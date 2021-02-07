import Head from 'next/head';

const index = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-L59BNP8FW0"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-L59BNP8FW0');
              `,
                }}
            /> */}
        </Head>
    )
}

export default index;