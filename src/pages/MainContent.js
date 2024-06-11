import React from 'react';
import UserGreetings from '../components/UserGreetings';
import Dashboard from '../components/Dashboard';
import {Navigate, useParams} from "react-router-dom";
import { getUserData} from "../data/apiData";
import {useFetchUserData} from "../hooks/fetchUserData";

/**
 * Renders the main content of the app based on the given user ID.
 *
 * @returns {React.Element} The main content component.
 */
function MainContent() {
    const { userId } = useParams();

    const { data: user, loading, error } = useFetchUserData(userId, getUserData);

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

    return (
        <main className="main-content">
            <UserGreetings userId={userId}/>
            <Dashboard userId={userId} keyData={user.data.keyData}/>
        </main>
    );
}

export default MainContent;
