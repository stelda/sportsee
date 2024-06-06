import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { USER_PERFORMANCE } from "../mock/mockData";

function PerformanceChart({ userId }) {
    const userPerformance = USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId));

    if (!userPerformance) {
        return <p>No data available</p>;
    }



    const translateKind = (kind) => {
        const translation = {
            cardio: 'Cardio',
            energy: 'Énergie',
            endurance: 'Endurance',
            strength: 'Force',
            speed: 'Vitesse',
            intensity: 'Intensité'
        };
        return translation[kind];
    };

    const data = userPerformance.data.map(item => ({
        subject: translateKind(userPerformance.kind[item.kind]),
        value: item.value,
    }));

    return (
        <div className="performance-chart">
            <ResponsiveContainer width="100%" height={263}>
                <RadarChart
                    outerRadius={90}
                    data={data}
                    startAngle={210}
                    endAngle={570}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: 'white', fontSize: '12px' }}
                    />
                    <Tooltip />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#E60000"
                        fill="#E60000"
                        fillOpacity={0.6}
                        activeDot={false}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;
