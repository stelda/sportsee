import React from 'react';
import DailyActivityChart from './DailyActivityChart';
import WidgetsContainer from './WidgetsContainer';
import NutritionStats from './NutritionStats';

function Dashboard({ keyData }) {
    return (
        <section className="dashboard">
            <div className="chart_widgets">
                <DailyActivityChart />
                <WidgetsContainer />
            </div>
            <div className="nutrition">
                <NutritionStats keyData={keyData}/>
            </div>
        </section>

    );
}

export default Dashboard;
