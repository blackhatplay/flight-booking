const ContactDetails = () => {
    return (
        <section className="contact">
            <div className="contact-wrapper">
                <h1>Contact us</h1>
                <p>
                    Need Help? Get in touch with us, we are happy to answer your
                    questions.
          </p>
                <div className="contact-content">
                    <ul>
                        <li>
                            <div className="list-head">
                                <i className="fal fa-phone-alt"></i> Call us
                </div>
                            <p>We are here 24x7</p>
                            <a href="tel:1844-922-2333">Call 1844-922-2333</a>
                        </li>
                        <li>
                            <div className="list-head">
                                <i className="fal fa-envelope"></i> Email us
                </div>
                            <p>The response may take up to 24 hours.</p>
                            <a href="mailto:airlineschanges001@gmail.com"
                            >airlineschanges001@gmail.com</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails;
