import React from 'react';
import DailyActivityChart from './DailyActivityChart';
import WidgetsContainer from './WidgetsContainer';
import NutritionStats from './NutritionStats';

function Dashboard() {
    return (
        <section className="dashboard">
            <div className="chart_widgets">
                <DailyActivityChart />
                <WidgetsContainer />
            </div>
            <div className="nutrition">
                <NutritionStats />
            </div>
        </section>

    );
}

export default Dashboard;
