import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Error404 from "./pages/Error404";
import MainContent from "./pages/MainContent";

function AppRouter() {
    return (
        <Routes>
            {/* display user dashboard with user id */}
            <Route path="/user/:userId" element={<MainContent/>}/>

            {/* display Error404 component for any other URL */}
            <Route path="*" element={<Error404/>}/>
        </Routes>
    );
}

export default AppRouter;