const { parse } = require("pg-connection-string");

let pgconfig;

if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

module.exports = {

  development: {
    client: 'postgresql',
      connection: pgconfig || process.env.DATABASE_LOCAL_URL,
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
