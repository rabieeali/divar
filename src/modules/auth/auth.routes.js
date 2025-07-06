const { Router } = require("express");
const authController = require("./auth.controller");
const router = Router()

router.post('/send-otp', authController.sendOtp)
router.post('/check-otp', authController.checkOtp)


module.exports = {
    AuthRouter: router
}
