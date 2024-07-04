const swaggerJsdoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Dummy API',
        version: '1.0.0',
    },
};

// Options for swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: ['./routes/*.js', './controllers/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec };
