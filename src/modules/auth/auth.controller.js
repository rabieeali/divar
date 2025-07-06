const authService = require('./auth.service')

class AuthController {
    #service;

    constructor() {
        this.#service = this.authService()
    }

    sendOtp(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
    checkOtp(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController()