import dynamic from "next/dynamic";
import "../styles/globals.css";
const Navbar = dynamic(() => import("../components/Navbar.js"), {
  ssr: false,
});

import Footer from "../components/Footer";

//SCROLLTOTOP
import ScrollTop from "react-scrolltop-button";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <ScrollTop
        distance={500}
        className="react-scrolltop-button"
        speed={500}
        breakpoint={2560}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
