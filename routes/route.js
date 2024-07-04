const express = require('express');
const { getDummyMessage, createDummyMessage } = require('../controllers/controller');

const router = express.Router();

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
router.get('/', getDummyMessage);

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
router.post('/', createDummyMessage);

module.exports = router;
