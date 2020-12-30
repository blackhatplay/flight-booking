import Routes from "../Routes";
import { policiesDataMain, policiesDataSec } from "../data";

const PoliciesContent = () => {
  const renderWithH1 = policiesDataMain.map(({ title, content }) => {
    return (
      <div key={title}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  });
  const renderWithH4 = policiesDataSec.map(({ title, content }) => {
    return (
      <div key={title}>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    );
  });

  return (
    <div className="policies-wrapper">
      {renderWithH1}
      <Routes />
      {renderWithH4}
      <div>
        <h4>
          So, 8 Top tips for finding the cheapest flight to anywhere for the
          holiday:
        </h4>
        <ul>
          <li>Try to use flexible dates</li>
          <li>Check out airports around</li>
          <li>Put airfare alerts</li>
          <li>Plan adventures</li>
          <li>Use aggregate search sites</li>
          <li>Take up airfare service</li>
          <li>Book tickets by using Credit Card Portals</li>
          <li>Buy your flight tickets with miles</li>
        </ul>
      </div>
    </div>
  );
};

export default PoliciesContent;
