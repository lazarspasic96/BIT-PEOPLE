import User from '../entities/User'

// fetchUsers()

const fetchCachedUsers = () => {
    const cachedApiUsers = JSON.parse(localStorage.getItem('apiUsers'));

    if (cachedApiUsers && cachedApiUsers.length) {
        return Promise.resolve(cachedApiUsers.map(apiUser => new User(apiUser)));
    }

    return fetchUsers();
}

const fetchUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("time", JSON.stringify(new Date().getTime()));
            localStorage.setItem("apiUsers", JSON.stringify(data.results))

            return data.results.map(user => new User(user))
        })
}

export { fetchUsers, fetchCachedUsers }
