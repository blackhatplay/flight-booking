import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faBinoculars } from '@fortawesome/free-solid-svg-icons';

const ShowCase = ({ id = "showcase1" }) => {
    return (
        <div id={id} className="showcase showcase1">
            <h2>​SEE HOW MUCH YOU CAN SAVE WITH THESE LAST MINUTE RATES</h2>
            <h4>Booking, Cancellations, Change of Flight, Flight Delay</h4>
            <div className="showcase-icons">
                <FontAwesomeIcon icon={faBinoculars} size={'3x'} />
                <div className="ribbon">
                    <div className="row">
                        <div className="block">
                            <h1>
                                <span>SEARCH</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faPhoneAlt} size={'3x'} />
            </div>
        </div>
    )
}

export default ShowCase;
