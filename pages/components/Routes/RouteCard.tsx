import { disconnect } from "process";

const RouteCard = ({ flightData }) => {

    const res = flightData.map(item => {
        const renderedUl = item.data.map(({ title, data }, index) => {
            if (index >= 5)
                return
            return (
                <li key={`${title} ${Math.random()}`}>
                    <h2><span>{title}</span><span>{data}</span></h2>
                </li>
            );
        });
        return (
            <div className="route-item" key={item.title}>
                <div className="route-title"><h1>{item.title}</h1></div>
                <div className="route-card">
                    <ul>
                        {renderedUl}
                    </ul>
                </div>
            </div>
        );
    })
    return (
        <>
            {res}
        </>
    )
}

export default RouteCard;
