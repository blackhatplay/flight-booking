import { flightData } from '../data';
import RouteCard from './RouteCard';

const Routes = () => {
  return (
    <div className="container">
      <h1>Route Operations</h1>
      <h3>These are the major airlines in USA which operates very often on the below mentioned routes :-</h3>
      <div className="route">
        <RouteCard flightData={flightData} />
      </div>
      <div className="price-disclaimer">
        <p>*Average prices based on season.</p>
        <hr />
        <p>
          Savings are calculated from an unrestricted “Y” class published airfare of major airline carriers known as fully flexible airfare. Savings
          may vary based on availability, advance purchase, seasonality, minimum stay, maximum stay, travel dates and blackout dates. Savings may
          change if any of these factors vary without notice. Most discounted fares are non-refundable and have restrictions on dates and routing
          change after ticketing and prior to travel. Savings are based on our research on major airlines and routes as per 21 days advance purchase
          only. Displayed fares are based on historical data and subject to change and can’t be guaranteed at the time of booking.
        </p>
      </div>
    </div>
  );
};

export default Routes;
