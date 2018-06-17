const config = require('../config/mssql')

const knex = require('knex')({
    client: 'mssql',
    connection: {
        host : config.host,
        port: config.port,
        user : config.username,
        password : config.password,
        database : config.database,
        connectionTimeout: 60000,
        options: config.options
    },
    pool: { min: 5, max: 100 }
});

module.exports = knex;
