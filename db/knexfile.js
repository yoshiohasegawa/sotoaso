// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
      connection: {
        host: '127.0.0.1', // Local host
        user: process.env.REACT_APP_DB_USER,
        password: process.env.REACT_APP_DB_PW,
        database: process.env.REACT_APP_DB_NAME
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: `${__dirname}/migrations/`,
        tableName: 'knex_migrations'
      },
      seeds: {
        directory: `${__dirname}/seeds/`
      }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
