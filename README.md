# NuHelmet

<div align="center">

[![NPM downloads](https://img.shields.io/npm/dm/nuhelmet.svg?style=flat)](https://www.npmjs.com/package/nuhelmet)
[![built with typescript-lib-starter](https://img.shields.io/badge/built%20with-typescript--lib--starter%20-blue.svg)](https://github.com/fox1t/typescript-lib-starter)
[![styled with prettier](https://img.shields.io/badge/styled%20with-Prettier-blue.svg)](https://github.com/prettier/prettier)
[![david-dm](https://david-dm.org/nucleode/nuhelmet.svg)](https://david-dm.org/nucleode/nuhelmet)
[![Greenkeeper badge](https://badges.greenkeeper.io/nucleode/nuhelmet.svg)](https://greenkeeper.io/)

</div>

Content Security Policy (CSP) directive for fastify-helmet. Include some security best practices design for OWASP.
Be like Fort Knox!

## Install
`npm install nuhelmet`

## Usage
```typescript
import nuhelmet from 'nuhelmet'

server.register(nuhelmet, {
    domains: ['nucleode.com','fastify.io'],
  })
```

### Dependencies

* [fastify-plugin](https://github.com/fastify/fastify-plugin)
* [fastify-helmet](https://github.com/fastify/fastify-helmet)
