import React from 'react';

function Error404() {
    return (
        <main className='main-content'>
            <div className="error404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
        </main>
    );
}

export default Error404;