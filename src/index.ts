import fastifyPlugin from 'fastify-plugin'
import helmet from 'fastify-helmet'

export = fastifyPlugin(function(fastify, opts, next) {
  const { domains = [], noCache = true, noSniff = true } = opts

  fastify.register(helmet, {
    hidePoweredBy: false,
    noCache,
    noSniff,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", ...domains],
        frameAncestors: ["'self'"],
        styleSrc: ["'self'", ...domains, 'fonts.googleapis.com', "'unsafe-inline'"],
        fontSrc: ["'self' data:", 'fonts.googleapis.com', 'fonts.gstatic.com'],
        scriptSrc: ["'self'", ...domains].concat(
          process.env.NODE_ENV === 'development' ? ["'unsafe-eval'", "'unsafe-inline'"] : [],
        ),
        objectSrc: ["'none'"],
      },
    },
  })
  next()
})
