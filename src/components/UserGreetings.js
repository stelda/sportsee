import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserData} from "../data/apiData";
import {useFetchUserData} from "../hooks/fetchUserData";
import PropTypes from "prop-types";

/**
 * Render the user greetings section.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.userId - The ID of the user.
 *
 * @returns {JSX.Element} - The rendered user greetings section.
 */
function UserGreetings({userId}) {

    const { data: user, loading, error } = useFetchUserData(userId, getUserData);

    if (loading) {
        return (
            <div className="main-content">
                <p>Loading...</p>
            </div>
        );
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

UserGreetings.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserGreetings;
