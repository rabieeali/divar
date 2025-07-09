const swaggerjsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


function swaggerConfig(app) {
    const swaggerDocument = swaggerjsDoc({
        swaggerDefinition: {
            openapi:"3.0.1",
            info: {
                title: 'divar-backend',
                description: 'divar with experss.js APIs',
                version: '1.0.0'
            },
        },
        apis: [process.cwd() + '/src/modules/**/*.swagger.js']
    })
    const swagger = swaggerUi.setup(swaggerDocument, {})
    app.use('/', swaggerUi.serve, swagger)
}


module.exports = swaggerConfig
