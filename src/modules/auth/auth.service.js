class AuthService {
    sendOtp(mobile) { }
    checkOtp(mobile, code) { }
}


// singletone pattern
module.exports = new AuthService()