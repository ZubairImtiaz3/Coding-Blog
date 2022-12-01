import "../styles/globals.css";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ScrollTop
        text="^"
        distance={500}
        className="react-scrolltop-button"
        speed={500}
        target={10}
        breakpoint={2560}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
