exports.up = function(knex) {
    return knex.schema.createTable('activity_types', table => {
        table.integer('id').primary().unsigned();
        table.string('activity_name');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activity_types');
};
