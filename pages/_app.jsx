import "../styles/global.css";
import "typeface-poppins";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
