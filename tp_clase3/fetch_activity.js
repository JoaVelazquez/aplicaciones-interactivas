// Fetch users data from the API
const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

// Create a row for a single user
const createUserRow = (user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
        <td>${user.company.name}</td>
    `;
    return row;
};

// Render users in the table
const renderUsers = (users) => {
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = '';
    users.forEach(user => {
        tableBody.appendChild(createUserRow(user));
    });
};

// Display error message
const showError = (message) => {
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="7" class="error-message">
                ${message}
            </td>
        </tr>
    `;
};

// Initialize the application
const initApp = async () => {
    try {
        const users = await getUsers();
        renderUsers(users);
    } catch (error) {
        console.error(error);
        showError('Error intentando cargar los usuarios. Por favor, intente nuevamente más tarde.');
    }
};

// Start the application when the page loads
initApp();
