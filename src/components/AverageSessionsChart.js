import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Rectangle, Legend} from 'recharts';
import { USER_AVERAGE_SESSIONS } from "../mock/mockData";

function AverageSessionsChart({ userId }) {
    const userSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId));

    if (!userSessions) {
        return <p>No data available</p>;
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

export default AverageSessionsChart;
