import { test } from 'tap'
import Fastify from 'fastify'

import nuhelmet from '../'

const wantedHeaders = {
  'content-security-policy':
    "default-src 'self'; frame-ancestors 'self'; style-src 'self' fonts.googleapis.com; font-src 'self' data: fonts.googleapis.com fonts.gstatic.com; script-src 'self'; object-src 'none'",
  'x-dns-prefetch-control': 'off',
  'x-frame-options': 'SAMEORIGIN',
  'strict-transport-security': 'max-age=15552000; includeSubDomains',
  'x-download-options': 'noopen',
  'surrogate-control': 'no-store',
  'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  pragma: 'no-cache',
  expires: '0',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '2',
  connection: 'keep-alive',
}

test('Should return correct headers', t1 => {
  t1.plan(1)

  const fastify = Fastify()
  fastify.register(nuhelmet)
  fastify.get('/headers', (req, res) => {
    res.send({})
  })

  fastify
    .inject({
      method: 'GET',
      url: '/headers',
    })
    .then(response => {
      const {
        headers: { date, ...otherHeaders },
      } = response as any
      t1.deepEqual(otherHeaders, {
        'content-security-policy': wantedHeaders['content-security-policy'],
        'x-content-security-policy': wantedHeaders['content-security-policy'],
        'x-webkit-csp': wantedHeaders['content-security-policy'],
        'x-dns-prefetch-control': wantedHeaders['x-dns-prefetch-control'],
        'x-frame-options': wantedHeaders['x-frame-options'],
        'strict-transport-security': wantedHeaders['strict-transport-security'],
        'x-download-options': wantedHeaders['x-download-options'],
        'surrogate-control': wantedHeaders['surrogate-control'],
        'cache-control': wantedHeaders['cache-control'],
        pragma: wantedHeaders['pragma'],
        expires: wantedHeaders['expires'],
        'x-content-type-options': wantedHeaders['x-content-type-options'],
        'x-xss-protection': wantedHeaders['x-xss-protection'],
        'content-type': wantedHeaders['content-type'],
        'content-length': wantedHeaders['content-length'],
        connection: wantedHeaders['connection'],
      })
      t1.end()
    })
    .catch(err => {
      t1.end()
    })
})
