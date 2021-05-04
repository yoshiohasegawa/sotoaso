
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activity_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity_types').insert([
        {name: 'Running'},
        {name: 'Walking'},
        {name: 'Cycling'},
        {name: 'Swimming'},
        {name: 'Hiking'},
        {name: 'Mountaineering'},
        {name: 'Skiing'}
      ]);
    });
};
