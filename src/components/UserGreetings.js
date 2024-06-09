import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserData} from "../data/apiData";
import {useFetchUserData} from "../hooks/fetchUserData";

function UserGreetings({userId}) {

    const { data: user, loading, error } = useFetchUserData(userId, getUserData);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !user) {
        return <Navigate to="/404" />;
    }

    const { firstName } = user.data.userInfos;

    return (
        <section className="user-greetings">
            <h1>Bonjour <span className="username">{firstName}</span> !</h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier <span role="img" aria-label="clap">👏</span></p>
        </section>
    );
}

export default UserGreetings;
