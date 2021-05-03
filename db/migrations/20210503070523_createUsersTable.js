exports.up = async (knex) => {
  // Add uuid_generate_v4() to database functions
  // if it doesn't exist already.
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

  return knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('email').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('users');
};
