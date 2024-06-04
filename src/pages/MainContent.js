import React from 'react';
import UserGreetings from '../components/UserGreetings';
import Dashboard from '../components/Dashboard';
import {Navigate, useParams} from "react-router-dom";
import { USER_MAIN_DATA } from "../mock/mockData";

function MainContent() {
    const { userId } = useParams();
    const user = USER_MAIN_DATA.find(user => user.id === parseInt(userId));

    if (!user) {
        return <Navigate to="/404" />;
    }

    return (
        <main className="main-content">
            <UserGreetings userId={userId}/>
            <Dashboard userId={userId} keyData={user.keyData}/>
        </main>
    );
}

export default MainContent;
