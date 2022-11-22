import "../styles/globals.css";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
