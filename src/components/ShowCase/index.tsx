import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { number } from "../data";

const ShowCase = ({ id = "showcase1" }) => {
  return (
    <div id={id} className="showcase showcase1">
      <h2>​Compare and Book Cheap Flights from Over 600 Airlines!</h2>
      <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span className="icon-circle">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </span>
        Call 1-888-802-0980 for Phone Only Deals and Get upto 40% OFF!
      </h4>
      <div className="showcase-icons">
        <FontAwesomeIcon icon={faBinoculars} size={"3x"} />
        <div className="ribbon">
          <div className="row">
            <div className="block">
              <h1>
                <span>SEARCH</span>
              </h1>
            </div>
          </div>
        </div>
        <a href={`tel:${number}`}>
          <FontAwesomeIcon icon={faPhoneAlt} size={"3x"} />
        </a>
      </div>
    </div>
  );
};

export default ShowCase;
