import React from 'react';
import { USER_MAIN_DATA } from "../mock/mockData";

function UserGreetings({userId}) {
    const user = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
    const { firstName } = user.userInfos;

    return (
        <section className="user-greetings">
            <h1>Bonjour <span className="username">{firstName}</span> !</h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier <span role="img" aria-label="clap">👏</span></p>
        </section>
    );
}

export default UserGreetings;
