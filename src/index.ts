import fastifyPlugin from 'fastify-plugin'
import helmet from 'fastify-helmet'

export default fastifyPlugin(function(fastify, opts, next) {
  const { domain } = opts
  fastify.register(helmet, {
    hidePoweredBy: true,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", domain],
        styleSrc: ["'self'", domain, 'fonts.googleapis.com'].concat(
          process.env.NODE_ENV === 'development' ? ["'unsafe-inline'"] : [],
        ),
        fontSrc: ["'self' data:", 'fonts.googleapis.com', 'fonts.gstatic.com'],
        scriptSrc: ["'self'", domain].concat(
          process.env.NODE_ENV === 'development' ? ["'unsafe-eval'", "'unsafe-inline'"] : [],
        ),
        objectSrc: ["'none'"],
      },
    },
  })
  next()
})
