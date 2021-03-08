import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { number } from '../data';

const Nav = () => {
    return (
        <nav id="main-nav">
            <div className="container">
                <div className="nav-wrapper">
                    <Link href="/">
                        <a className="logo">
                            <Image src="/blue-logo.png" width={50} height={50} alt="logo" />
                            <div>
                                <h1>Flight Bookings</h1>
                                <span className="tagline">Flight Booking | Changes</span>
                            </div>
                        </a>
                    </Link>
                    <a href={`tel:${number}`}><h4>Call Us</h4><FontAwesomeIcon icon={faPhoneAlt} />{number}</a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/unaccompanied-minor"><a>Unaccompanied Minor</a></Link>
                        </li>
                        <li>

                            <div className="dropdown">
                                <Link href="/delta-airlines"><a className="dropbtn">AirLines</a></Link>
                                <div className="dropdown-content">
                                    <Link href="/delta-airlines"><a >Delta Airlines</a></Link>
                                    <Link href="/american-airlines"><a>American Airlines</a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href="/booking-tollfree"><a>Booking Tollfree</a></Link>
                        </li>
                        <li>
                            <div className="dropdown">
                                <Link href="/disclaimer"><a className="dropbtn">Policy</a></Link>
                                <div className="dropdown-content">
                                    <Link href="/disclaimer"><a >Disclaimer</a></Link>
                                    <Link href="/terms-conditions"><a>Terms &amp; Conditions</a></Link>
                                    <Link href="/refund-cancellations"><a>Refunds &amp; Cancellations</a></Link>
                                    <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href="/destinations"><a>Destinations</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a>Contact</a></Link>
                        </li>
                    </ul>

                    <ul className="social-links">
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/flightboooking/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/flightboooking" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
