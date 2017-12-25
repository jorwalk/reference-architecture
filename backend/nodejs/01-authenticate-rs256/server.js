'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const Joi = require('joi');
const jwt = require('hapi-auth-jwt2');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3001,
  routes: {
    cors: {
      // change this for production
      origin: ['*']
    }
  }
});

const registerRoutes = () => {
  server.route({
    method: 'GET',
    path: '/api/public',
    config: {
      auth: false,
      handler: (req, res) => {
        res({
          message: "Hello from a public endpoint! You don't need to be authenticated to see this."
        });
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/private',
    config: {
      auth: {
        scope: 'read:messages'
      },
      handler: (req, res) => {
        res({
          message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
        });
      }
    }
  });
};

const validateUser = (decoded, request, callback) => {
  // This is a simple check that the `sub` claim
  // exists in the access token. Modify it to suit
  // the needs of your application
  if (decoded && decoded.sub) {
    return callback(null, true, {
      scope: decoded.scope.split(' ')
    });
  }

  return callback(null, false);
};

server.register(jwt, err => {
  if (err) throw err;
  server.auth.strategy('jwt', 'jwt', 'required', {
    complete: true,
    // verify the access token against the
    // remote Auth0 JWKS
    key: jwksRsa.hapiJwt2Key({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    verifyOptions: {
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      algorithms: ['RS256']
    },
    validateFunc: validateUser
  });
  registerRoutes();
});

server.start(err => {
  if (err) throw err;
  console.info(`Server started at ${server.info.uri}`);
});
