const BASE_URL = 'http://localhost:3000/user';

export async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
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
