const express = require('express')
const dotenv = require('dotenv')
const swaggerConfig = require('./src/config/swagger.config')
dotenv.config()

async function main() {
    const app = express()
    const port = process.env.PORT
    require('./src/config/mongoose.config')
    swaggerConfig(app)

    app.listen(port, () => console.log(`server running: http://localhost:${port}`))
}
main()