import React from 'react';

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li><a href="#"><img src="/assets/sidebar_yoga.png" alt="Yoga"/></a></li>
                <li><a href="#"><img src="../assets/sidebar_swimmer.png" alt="Swimmer"/></a></li>
                <li><a href="#"><img src="../assets/sidebar_bicycle.png" alt="Bicycle"/></a></li>
                <li><a href="#"><img src="../assets/sidebar_dumbbell.png" alt="Dumbbell"/></a></li>
            </ul>
            <p>Copyright, SportSee 2024</p>
        </aside>
    );
}

export default Sidebar;
