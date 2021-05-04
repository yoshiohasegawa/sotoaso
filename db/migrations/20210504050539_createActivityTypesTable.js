exports.up = function(knex) {
    return knex.schema.createTable('activity_types', table => {
        table.increments('id').primary().unsigned();
        table.string('name');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activity_types');
};
