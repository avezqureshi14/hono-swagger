const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./swagger');
const dummyRoutes = require('./routes/route');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routes
app.use('/dummy', dummyRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
