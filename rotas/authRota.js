import authController from "../controller/authController.js"

export default async function authRota(fastify, options) {
    // Declare a route
    fastify.get('/', async function (request, reply) {
        return { hello: 'world' }
    })
    fastify.get('/usuarios', async function (request, reply) {
        let usuarios = await authController.getAllUsers()
        return usuarios
    })

    fastify.post('/create-user', async function (request, reply) {
        const resposta = authController.createUser(request)
        return resposta
    })
}