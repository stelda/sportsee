const BASE_URL = 'http://localhost:3000/user';

/**
 * Fetches data from the specified endpoint.
 *
 * @param {string} endpoint - The endpoint to fetch the data from.
 *
 * @return {Promise<any>} - A promise that resolves with the fetched data as JSON.
 * @throws {Error} - If there is an HTTP error with the response.
 */
export async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export async function getUserData(userId) {
    return fetchData(`${userId}`);
}

export async function getUserActivity(userId) {
    return fetchData(`${userId}/activity`);
}

export async function getUserAverageSessions(userId) {
    return fetchData(`${userId}/average-sessions`);
}

export async function getUserPerformance(userId) {
    return fetchData(`${userId}/performance`);
}
