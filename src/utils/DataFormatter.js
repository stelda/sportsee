/**
 * Class for formatting user data.
 * @class
 */
class DataFormatter {

/**
 * Formats the user activity for the Daily Activity Chart
 */
    static formatUserActivity(userActivity) {
        return userActivity.sessions.map(session => ({
            day: new Date(session.day).getDate(),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }

/**
 * Formats user sessions data for the Average Sessions Chart.
 */
    static formatUserSessions(userSessions) {
        return userSessions.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
        }));
    }

/**
 * Format user performance data for the Performance Chart.
 */
    static formatUserPerformance(userPerformance) {
        const translateKind = (kind) => {
            const translation = {
                cardio: 'Cardio',
                energy: 'Énergie',
                endurance: 'Endurance',
                strength: 'Force',
                speed: 'Vitesse',
                intensity: 'Intensité'
            };
            return translation[kind];
        };

        return userPerformance.data.map(item => ({
            subject: translateKind(userPerformance.kind[item.kind]),
            value: item.value,
        }));
    }

/**
 * Formats the user score data for the Score Chart.
 */
    static formatUserScore(user) {
        const score = user.data.todayScore || user.data.score;
        const name = 'Score';
        const value = score * 100;
        const fill = '#E60000';
        const endAngle = 90 + (score * 360);
        return [{name, value, fill, endAngle}];
    }
}

export default DataFormatter;