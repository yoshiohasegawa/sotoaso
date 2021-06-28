
exports.seed = function(knex) {
  knex('activity_types').select().then(function(rows) {
    // Only seed if table is empty
    if (!rows.length) {
      // Deletes ALL existing entries
      return knex('activity_types').del()
        .then(function () {
          // Inserts seed entries
          return knex('activity_types').insert([
            {id: 1, activity_name: 'Running'},
            {id: 2, activity_name: 'Walking'},
            {id: 3, activity_name: 'Cycling'},
            {id: 4, activity_name: 'Swimming'},
            {id: 5, activity_name: 'Hiking'},
            {id: 6, activity_name: 'Mountaineering'},
            {id: 7, activity_name: 'Skiing'}
          ]);
        });
    }
  })

};
