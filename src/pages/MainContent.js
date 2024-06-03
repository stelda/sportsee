import React from 'react';
import UserGreetings from '../components/UserGreetings';
import Dashboard from '../components/Dashboard';
import {useParams} from "react-router-dom";

function MainContent() {
    const { userId } = useParams();

    return (
        <main className="main-content">
            <UserGreetings userId={userId}/>
            <Dashboard userId={userId}/>
        </main>
    );
}

export default MainContent;
