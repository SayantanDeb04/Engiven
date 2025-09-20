import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="The decentralized way to charity" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
