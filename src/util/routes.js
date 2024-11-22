const loginHandler = require('../handler/auth/login');
const registerHandler = require('../handler/auth/register');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => ({
            message: 'API is up and running!',
        }),
    },

    {
        method: 'GET',
        path: '/test-auth',
        handler: (request, h) => ({
            message: 'Test route is working without JWT!',
        }),
    },

    {
        method: 'POST',
        path: '/register',
        handler: registerHandler,
    },

    {
        method: 'POST',
        path: '/login',
        handler: loginHandler,
    },
];

module.exports = routes;
