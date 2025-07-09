/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Auth modules & routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SendOtp:
 *       type: object
 *       required:
 *         - mobile
 *       properties:
 *         mobile:
 *           type: string
 */

/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     summary: login with OTP
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/SendOtp'
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SendOtp'
 *     responses:
 *       200:
 *         description: success
 */
