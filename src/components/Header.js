import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo_name">
                <img src="../../logo.png" alt="Logo SportSee" />
                <span>SportSee</span>
            </div>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
