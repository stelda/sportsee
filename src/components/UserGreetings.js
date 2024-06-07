import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { getUserData} from "../data/apiData";

function UserGreetings({userId}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData(userId);
                setUser(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

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
