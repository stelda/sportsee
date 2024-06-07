import React, {useEffect, useState} from 'react';
import UserGreetings from '../components/UserGreetings';
import Dashboard from '../components/Dashboard';
import {Navigate, useParams} from "react-router-dom";
import { getUserData} from "../data/apiData";

function MainContent() {
    const { userId } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const data = await getUserData(userId);
                    setUser(data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };

            fetchUserData();
        }, [userId]);

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error || !user) {
            return <Navigate to="/404" />;
        }

    return (
        <main className="main-content">
            <UserGreetings userId={userId}/>
            <Dashboard userId={userId} keyData={user.data.keyData}/>
        </main>
    );
}

export default MainContent;
