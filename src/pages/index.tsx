import Footer from "../components/Footer";
import Header from "../components/Header";
import Policies from "../components/Policies";
import Services from "../components/Services";
import Head from '../components/Head';

const index = () => {
  return (
    <>
      <Head title="Flight Booking" />
      <Header id="showcase1" />
      <Services />
      <Policies />
      <Footer />
    </>
  );
}

export default index;