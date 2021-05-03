const knex = require('knex');
const knexfile = require('./knexfile');

// TODO : In production => decide with env vars which configuration to use
const db = knex(knexfile.development);

module.exports = db;