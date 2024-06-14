class DataFormatter {

    /* format Daily Activity Chart data */
    static formatUserActivity(userActivity) {
        return userActivity.sessions.map(session => ({
            day: new Date(session.day).getDate(),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }

    /* format Average Sessions Chart data */
    static formatUserSessions(userSessions) {
        return userSessions.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
        }));
    }

    /* format Performance Chart data */
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

    /* format Score Chart data */
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