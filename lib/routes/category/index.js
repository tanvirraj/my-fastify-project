const fp = require('fastify-plugin')
const { consume } = require('./query')
const schema = require('./schema')

async function category(server, options, done) {
  server.route({
    method: 'GET',
    url: '/category',
    schema: schema.forget,
    handler: async () => {
      const { rows } = await server.pg.write.query(consume())

      console.log('rows----', rows)

      return { name: rows }
    }
  })

  done()
}

module.exports = fp(category)
