const authService = require('./auth.service')
const autoBind = require('auto-bind')
const AuthMessage = require('./auth.messages')


class AuthController {
    #service;

    constructor() {
        autoBind(this)
        this.#service = authService
    }

    async sendOtp(req, res, next) {
        try {
            const { mobile } = req.body
            await this.#service.sendOtp(mobile)
            return res.json({
                message: AuthMessage.SendOtpSuccessfully
            })

        } catch (error) {
            next(error)
        }
    }
    async checkOtp(req, res, next) {
        try {
            const { mobile, code } = req.body
            await this.#service.checkOtp(mobile, code)
            return res.json({
                message: AuthMessage.LoginSuccessfully
            })
        
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController()