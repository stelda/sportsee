import { useState, useEffect } from 'react';

/**
 * Fetches user data from the server using the provided fetchDataFunc.
 *
 * @param {string} userId - The id of the user to fetch data for.
 * @param {function} fetchDataFunc - The function to fetch user data from the server.
 * @return {object} - An object containing user data, loading state, and error state.
 */
export function useFetchUserData(userId, fetchDataFunc) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchDataFunc(userId);
                setData(userData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId, fetchDataFunc]);

    return { data, loading, error };
}

