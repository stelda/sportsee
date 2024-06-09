import React from 'react';
import AverageSessionsChart from "./AverageSessionsChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";

/**
 * Renders a container component that contains multiple widget components.
 *
 * @param {Object} props - The props object containing the userId.
 * @param {string} props.userId - The unique identifier of the user.
 * @return {JSX.Element} - The JSX element representing the widgets container component.
 */
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
