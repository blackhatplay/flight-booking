import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="container">
                <div className="footer-wrapper">
                    <ul className="footer-links">
                        <li>
                            <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
                        </li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                    </ul>
                    <ul className="social-icons">
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
