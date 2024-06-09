import React from 'react';
import DailyActivityChart from './DailyActivityChart';
import WidgetsContainer from './WidgetsContainer';
import NutritionStats from './NutritionStats';

/**
 * Renders the Dashboard component.
 *
 * @param {Object} props - The props object containing the userId and keyData.
 * @param {number} props.userId - The user's ID.
 * @param {Object} props.keyData - The key data object.
 * @return {JSX.Element} The rendered Dashboard component.
 */
function Dashboard({ userId, keyData }) {
    return (
        <section className="dashboard">
            <div className="chart_widgets">
                <DailyActivityChart userId={userId}/>
                <WidgetsContainer userId={userId}/>
            </div>
            <div className="nutrition">
                <NutritionStats keyData={keyData}/>
            </div>
        </section>
    );
}

export default Dashboard;
