import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import "../styles/globals.scss";
import { Whatsapp } from "../components/Whatsapp/Whatsapp";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default MyApp;
