import React, {useEffect, useState} from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis,  Tooltip, Legend, Bar } from 'recharts';
import { getUserActivity} from "../data/apiData";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import { USER_ACTIVITY } from "../data/mockData";
import { IS_DEVELOPMENT_MODE } from '../config.js';

/**
 * Renders a daily activity chart for a given user.
 *
 * @param {object} props - The props object containing the following property:
 *   - userId: The ID of the user.
 *
 * @return {JSX.Element} The rendered daily activity chart component.
 */
function DailyActivityChart({ userId }) {

    const [userActivity, setUserActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {

            if (IS_DEVELOPMENT_MODE) {
                const mockData = USER_ACTIVITY.find(activity => activity.userId === parseInt(userId));

                if(mockData) {
                    setUserActivity(mockData);
                } else {
                    setError(new Error('No mock data available'));
                }

                setLoading(false);
            }
            else {
                try {
                    const data = await getUserActivity(userId);
                    setUserActivity(data.data);
                } catch (err) {
                    setError(err);
                }
                finally {
                    setLoading(false);
                }
            }
        };

        fetchUserData();
    }, [userId]);

    if (loading) {
        return (
            <div className="main-content">
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !userActivity) {
        return <Navigate to="/404" />;
    }

    /* format data for the chart */
    const data = userActivity.sessions.map(session => ({
        day: new Date(session.day).getDate(),
        kilogram: session.kilogram,
        calories: session.calories
    }));

    /* calculate the domain for the weight axis */
    const calculateDomain = (data) => {
        const weights = data.map(session => session.kilogram);
        const minWeight = Math.min(...weights);
        const maxWeight = Math.max(...weights);
        return [Math.round(minWeight - 1), Math.round(maxWeight + 1)]
    };

    /* set the domain for the weight axis */
    const weightDomain = calculateDomain(data);
    const minWeight = weightDomain[0];
    const maxWeight = weightDomain[1];
    const midWeight = Math.round((minWeight + maxWeight) / 2)

    /* round the ticks */
    const roundTick = (tick) => {
        return Math.round(tick);
    };

    /* custom tooltip */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="daily-activity-chart">
            <h3>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data} barGap={8} barCategoryGap="20%" margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        tick={{ fill: '#74798C', fontSize: 14, fontWeight: 500 }}
                    />
                    <YAxis
                        yAxisId="weight"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}

                        domain={weightDomain}
                        tickFormatter={roundTick}
                        tick={{ fill: '#74798C' , fontSize: 14, fontWeight: 500}}
                        ticks={[minWeight, midWeight, maxWeight]}
                        tickMargin={20}
                    />
                    <YAxis
                        yAxisId="calories"
                        orientation="right"
                        stroke="#8884d8"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={20}
                        hide={true}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    />
                    <Legend
                        align="right"
                        verticalAlign="top"
                        height={36}
                        iconType="circle"
                        iconSize={10}
                        wrapperStyle={{ top: 0, right: 0, fontSize: 14, color: '#74798C' }}
                        formatter={(value) => <span className='legend-text'>{value}</span>}
                    />
                    <Bar
                        yAxisId="weight"
                        dataKey="kilogram"
                        fill="#282D30"
                        name="Poids (kg)"
                        barSize={8} // width of the bars
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        fill="#E60000"
                        name="Calories brûlées (kCal)"
                        barSize={8} // width of the bars
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

DailyActivityChart.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default DailyActivityChart;
