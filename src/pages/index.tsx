import Footer from "../components/Footer";
import Header from "../components/Header";
import Policies from "../components/Policies";
import Services from "../components/Services";

const index = () => {
  return (
    <>
      <Header id="showcase1" />
      <Services />
      <Policies />
      <Footer />
    </>
  );
}

export default index;