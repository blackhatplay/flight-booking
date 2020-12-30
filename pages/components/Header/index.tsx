import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faBinoculars } from '@fortawesome/free-solid-svg-icons';

const Header = ()=> {
    return (
    <header>
        <nav id="main-nav">
            <div className="container">
                <div className="nav-wrapper">
                <Link href="/">
                    <a  className="logo">
                        <Image src="/main-logo.png" width={80} height={25} alt="logo" />
                        <h1>Flight Bookings</h1>
                    </a>
                    </Link>
                <a href="tel:1844-922-2333"><h4>Call Us</h4><FontAwesomeIcon icon={faPhoneAlt}/>1844-922-2333</a>
                </div>
                <Nav />
            </div>
        </nav>
        <div className="container">
        <div id="showcase1" className="showcase showcase1">
            <h2>​SEE HOW MUCH YOU CAN SAVE WITH THESE LAST MINUTE RATES</h2>
            <h4>Booking, Cancellations, Change of Flight, Flight Delay</h4>
            <div className="showcase-icons">
                <FontAwesomeIcon icon={faBinoculars} size={'3x'}/>
                <div className="ribbon">
                    <div className="row">
                        <div className="block">
                            <h1>
                            <span>Okay</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faPhoneAlt} size={'3x'}/>
            </div>
        </div>
        </div>
    </header>
    );
}

export default Header;