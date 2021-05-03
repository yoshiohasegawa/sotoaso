exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('title').notNullable();
      table.string('activity_type').notNullable();
      table.string('body')
      table.uuid('userId')
        .unsigned()
        .references('users.id')
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
