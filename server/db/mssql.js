const config = require('../config/mssql')

const knex = require('knex')({
    client: 'mssql',
    connection: {
        host : config.host,
        port: config.port,
        user : config.username,
        password : config.password,
        database : config.database
    },

    pool: { min: 0, max: 10 }
});

module.exports = knex;