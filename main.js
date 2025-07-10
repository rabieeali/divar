const express = require('express')
const dotenv = require('dotenv')
const swaggerConfig = require('./src/config/swagger.config')
const mainRouter = require('./src/app.routes')
const notFoundHandler = require('./src/common/exception/not-found.handler')
dotenv.config()

async function main() {
    const app = express()
    const port = process.env.PORT
    require('./src/config/mongoose.config')
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(mainRouter)

    swaggerConfig(app)
    notFoundHandler(app)
    allExceptionHandler(app)

    app.listen(port, () => console.log(`server running: http://localhost:${port}`))
}
main()