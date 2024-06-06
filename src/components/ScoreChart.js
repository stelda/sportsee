import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { USER_MAIN_DATA } from '../mock/mockData';

function ScoreChart({ userId }) {
    const user = USER_MAIN_DATA.find(user => user.id === parseInt(userId));

    if (!user) {
        return <p>No data available</p>;
    }

    const data = [
        {
            name: 'Score',
            value: user.todayScore * 100,
            fill: '#E60000'
        }
    ];

    const endAngle = 90 + (user.todayScore * 360);

    return (
        <div className="score-chart">
            <ResponsiveContainer width="100%" height={263}>
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={endAngle}
                >
                    <text
                        x={50}
                        y={30}
                        fill="$light-black"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={ {color: '#282D30', fontSize: '15px', fontWeight: '500'}}
                        className="score-chart-label"
                    >
                        Score
                    </text>

                    <RadialBar
                        minAngle={15}
                        clockWise
                        dataKey="value"
                    />
                    <text
                        x="50%"
                        y="45%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-percentage"
                        fill={'#282D30'}
                    >
                        {`${data[0].value}%`}
                    </text>
                    <text
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                        fill={'#74798C'}
                    >
                        de votre objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ScoreChart;
