const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Swagger set up
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Dummy API',
            version: '1.0.0',
        },
    },
    apis: ['./index.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /dummy:
 *   get:
 *     summary: Retrieve a dummy message
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, this is a dummy endpoint!
 */
app.get('/dummy', (req, res) => {
    res.json({ message: 'Hello, this is a dummy endpoint!' });
});

/**
 * @swagger
 * /dummy:
 *   post:
 *     summary: Create a dummy message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: This is a dummy post message
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: This is a dummy post message
 */
app.post('/dummy', (req, res) => {
    const { message } = req.body;
    res.status(201).json({ message });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
