import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons';
const Nav = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/airlines"><a>Airlines</a></Link>
                </li>
                <li>
                    <Link href="/travel-tollfree"><a>Travel Tollfree</a></Link>
                </li>
                <li>
                    <Link href="/policy"><a>Policy</a></Link>
                </li>
                <li>
                    <Link href="/destinations"><a>Destinations</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/"><a><FontAwesomeIcon icon={faFacebookF} /></a></Link>
                </li>
                <li>
                    <Link href="/"><a><FontAwesomeIcon icon={faInstagram} /></a></Link>
                </li>
                <li>
                    <Link href="/"><a><FontAwesomeIcon icon={faTwitter} /></a></Link>
                </li>
                <li>
                    <Link href="/"><a><FontAwesomeIcon icon={faPinterest} /></a></Link>
                </li>

            </ul>
    </div>
    )
}

export default Nav;
