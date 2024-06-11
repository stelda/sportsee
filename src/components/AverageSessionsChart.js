import React, {useEffect, useState} from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Rectangle, Legend} from 'recharts';
import { getUserAverageSessions} from "../data/apiData";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Renders an average sessions chart for a specific user.
 * @param {object} options - The options for the chart.
 * @param {string} options.userId - The user ID.
 * @return {JSX.Element} The average sessions chart component.
 */
function AverageSessionsChart({ userId }) {

    const [userSessions, setUserSessions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserAverageSessions(userId);
                setUserSessions(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
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

    if (error || !userSessions) {
        return <Navigate to="/404" />;
    }

    const data = userSessions.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
    }));

    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    // Custom tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ backgroundColor: 'white', color: 'black', padding: '5px', border: '1px solid #ccc' }}>
                    <p style={{ margin: 0 }}>{`${payload[0].value} min`}</p>
                </div>
            );
        }

        return null;
    };

    // Custom cursor
    const CustomCursor = ({points}) => {
        return (
            <Rectangle
                /* add 10% opacity */
                opacity={0.1}
                stroke="$red"
                x={points[0].x}
                width={258}
                height={263}
            />
        );
    };

    // Title
    const renderLegend = () => {
        return (
            <h3>Durée moyenne des sessions</h3>
        );
    }

    return (
        <div className="average-sessions-chart">
            <ResponsiveContainer width="100%" height={263}>
                <LineChart data={data} margin={{top: 20, right: 20, left: 20, bottom: 5}}>
                    <Legend content={renderLegend}/>
                    <XAxis
                        dataKey="day"
                        tickFormatter={(tick) => daysOfWeek[tick - 1]}
                        tick={{ fill: '#fff', opacity: 0.5 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        hide={true}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />}/>
                    <Line
                        type="monotone"
                        strokeWidth={2}
                        dataKey="sessionLength"
                        stroke={'#fff'}
                        opacity={0.5}
                        dot={false}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

AverageSessionsChart.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default AverageSessionsChart;
