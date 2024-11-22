const Hapi = require('@hapi/hapi');
const routes = require('./util/routes');
require('dotenv').config(); 

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'], 
            },
        },
    });

    server.route(routes);


    server.ext('onPreResponse', (request, h) => {
        const response = request.response;
        if (response.isBoom && response.output.statusCode === 404) {
            return h
                .response({ error: true, message: 'Endpoint not found' })
                .code(404);
        }
        return h.continue;
    }); 

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

init();
