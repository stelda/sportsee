import React, {useEffect, useState} from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { getUserPerformance} from "../data/apiData";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Renders a performance chart for a given user ID.
 *
 * @param {object} props - The component props.
 * @param {string} props.userId - The ID of the user.
 * @returns {JSX.Element} The performance chart component.
 */
function PerformanceChart({ userId }) {

    const [userPerformance, setUserPerformance] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserPerformance(userId);
                setUserPerformance(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }
    , [userId]);

    if (loading) {
        return (
            <div className="main-content">
                <p>Loading...</p>
            </div>
        );
    }

    if (error || !userPerformance) {
        return <Navigate to="/404" />;
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

PerformanceChart.propTypes = {
    userId: PropTypes.string.isRequired
};

export default PerformanceChart;
