import React from 'react';
import AverageSessionsChart from "./AverageSessionsChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";

function WidgetsContainer({ userId }) {
    return (
        <div className="widgets-container">
            <AverageSessionsChart userId={userId}/>
            <PerformanceChart userId={userId}/>
            <ScoreChart userId={userId}/>
        </div>
    );
}

export default WidgetsContainer;
