import Footer from "../components/Footer";
import Header from "../components/Header";
import Policies from "../components/Policies";
import Services from "../components/Services";
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Flight Booking</title>
      </Head>
      <Header id="showcase1" />
      <Services />
      <Policies />
      <Footer />
    </>
  );
}

export default index;