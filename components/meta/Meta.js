import Head from "next/head";

export default function Meta({ title, description, keywords }) {

    return (
        <Head>
            {/* GOOGLE */}
            <title>{title}</title>
            <meta charSet={'utf-8'} />
            <link rel='icon' href='/favicon.ico' />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index,follow" />
            //==============================================================
            {/* Social media */}
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description} />
            <meta property="og:type" content="Website" />
            <meta property="og:locale" content="en_GB" />
            <meta name="author" content="Sirage Al dbiyat" />
            <meta name="copyright" content="Sirage Al dbiyat" />
            //==============================================================

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@iLoveSemicolon" />
            <meta name="twitter:creator" content="@iLoveSemicolon" />
            <meta property="og:url" content="https://formriderjs.ilovesemicolons.io" />
        </Head>
    )
}


