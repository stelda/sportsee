import React from 'react';
import UserGreetings from './UserGreetings';
import Dashboard from './Dashboard';

function MainContent() {
    return (
        <main className="main-content">
            <UserGreetings />
            <Dashboard />
        </main>
    );
}

export default MainContent;
