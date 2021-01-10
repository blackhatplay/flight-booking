import ContactDetails from "../../components/Contact/ContactDetails";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Flight Booking</title>
            </Head>
            <header>
                <Nav />
            </header>
            <div className="container">
                <ContactDetails />
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact;