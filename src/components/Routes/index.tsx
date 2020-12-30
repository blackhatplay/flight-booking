import { flightData } from '../data';
import RouteCard from './RouteCard';

const Routes = () => {
  return (
    <div className="container">
      <h1>Route Operations</h1>
      <h3>
        These are the major airlines in USA which operates very often on the
        below mentioned routes :-
          <div className="route">
          <RouteCard flightData={flightData} />
        </div>
      </h3>
    </div>
  );
};

export default Routes;
