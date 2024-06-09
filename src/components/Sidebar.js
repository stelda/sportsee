import React from 'react';
import yoga from '../assets/sidebar_yoga.png';
import swimmer from '../assets/sidebar_swimmer.png';
import bicycle from '../assets/sidebar_bicycle.png';
import dumbbell from '../assets/sidebar_dumbbell.png';

/**
 * Renders the sidebar component.
 * @return {JSX.Element} The rendered sidebar element containing a list of images and a copyright notice.
 */
function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li><a href="#"><img src={yoga} alt="Yoga"/></a></li>
                <li><a href="#"><img src={swimmer} alt="Swimmer"/></a></li>
                <li><a href="#"><img src={bicycle} alt="Bicycle"/></a></li>
                <li><a href="#"><img src={dumbbell} alt="Dumbbell"/></a></li>
            </ul>
            <p>Copyright, SportSee 2024</p>
        </aside>
    );
}

export default Sidebar;
