// Import the framework and instantiate it
import authrota from './rotas/authrota.js'

import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
await fastify.register(authrota)

// Run the server!
try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
