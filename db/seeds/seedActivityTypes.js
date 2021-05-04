
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activity_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity_types').insert([
        {type: 'Running'},
        {type: 'Walking'},
        {type: 'Cycling'},
        {type: 'Swimming'},
        {type: 'Hiking'},
        {type: 'Mountaineering'},
        {type: 'Skiing'}
      ]);
    });
};
