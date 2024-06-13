import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { getUserData} from "../data/apiData";
import {Navigate} from "react-router-dom";
import {useFetchUserData} from "../hooks/fetchUserData";
import PropTypes from "prop-types";
import { USER_MAIN_DATA } from "../data/mockData";
import { IS_DEVELOPMENT_MODE } from '../config.js';

/**
 * Renders a score chart based on the user's data.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.userId - The unique identifier of the user.
 * @return {React.Element} - The score chart component.
 */
function ScoreChart({ userId }) {

    const userDataRetrievalFunction = IS_DEVELOPMENT_MODE ? async (userId) => {
            const mockData = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
            if(mockData) {
                return {data: mockData};
            } else {
                throw new Error('No mock data available');
            }
        }
        : getUserData;

    const { data: user, loading, error } = useFetchUserData(userId, userDataRetrievalFunction);


    if (loading) {
        return (
            <div className="main-content">
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !user) {
        return <Navigate to="/404" />;
    }

    const score = user.data.todayScore || user.data.score;

    const data = [
        {
            name: 'Score',
            value: score * 100,
            fill: '#E60000'
        }
    ];

    const endAngle = 90 + (score * 360);

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

ScoreChart.propTypes = {
    userId: PropTypes.string.isRequired
};

export default ScoreChart;
