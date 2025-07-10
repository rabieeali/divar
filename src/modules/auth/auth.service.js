const autoBind = require('auto-bind')
const crypto = require('crypto');
const UserModel = require('../user/user.model');
const createHttpError = require('http-errors');
const AuthMessage = require('./auth.messages');



class AuthService {
    #model;
    constructor() {
        autoBind(this)
        this.#model = UserModel
    }


    async checkExistByMobile(mobile) {
        const user = this.#model.findOne({ mobile })
        if (!user) throw new createHttpError.NotFound(AuthMessage.NotFound)
        return user
    }

    async sendOtp(mobile) {
        const user = await this.#model.findOne({ mobile })
        const now = new Date().getTime()
        const otp = {
            code: crypto.randomInt(10_000, 99_999),
            expiresIn: now + 1000 * 60 * 2 // two minutes
        }

        if (!user) {
            const newUser = await this.#model.create({ mobile, otp })
            return newUser
        }

        if (user.otp && user.otp.expiresIn > now) {
            throw new createHttpError.BadRequest(AuthMessage.OtpCodeNotExpired)
        }

        user.otp = otp
        await user.save()
        return user
    }

    async checkOtp(mobile, code) {
        const user = await this.checkExistByMobile(mobile)
        const now = new Date().getTime()

        if (user?.otp?.expiresIn < now) throw new createHttpError().Unauthorized(AuthMessage.OtpCodeExpired)
        if (user?.otp?.code !== code) throw new createHttpError().Unauthorized(AuthMessage.OtpCodeIncorrect)

        if (!user?.verifiedMobile) {
            user.verifiedMobile = true
            await user.save()
        }

        return user
    }
}


// singletone pattern
module.exports = new AuthService()