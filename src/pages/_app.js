import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Santa Rita Gigantes</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Santa Rita Gigantes." />
     
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
