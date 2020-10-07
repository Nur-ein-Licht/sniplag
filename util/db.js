const knex = require ('knex'),
  knexfile = require ('../knexfile'),
  environment = process.env.NODE_ENV || 'development'
;

const client = knex (knexfile[environment])

module.exports = client
