import { useState, useEffect } from 'react';

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

