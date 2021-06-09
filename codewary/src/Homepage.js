import ServiceCards from "./ServiceCards";
import HeaderDeck from "./HeaderDeck";
import About from "./About";
import Footer from "./Footer";
import ScrollAnimation from "react-animate-on-scroll";

function Homepage() {
  return (
    <>
      <HeaderDeck />
      {/*   <ScrollAnimation animateIn="fadeIn" duration={1}> */}
      <ServiceCards />
      <About />
      <Footer />
      {/*       </ScrollAnimation> */}
    </>
  );
}

export default Homepage;
