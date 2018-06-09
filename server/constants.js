// export default serverConfig = {
//     user: "",// server username
//     password: "", //server password
//     database: "", // server default database name
//     server: "",//server URL
// }

// export const serverPort = 8080;

module.exports = {
    serverConfig: {
        // user: "sa",// server username
        // password: "p@ssw0rd", //server password
        // database: "akysb", // server default database name
        // host:"localhost",
        // server:"ushydaadevani10",
        // port: 1433,
        // options: {
        //     instanceName: 'MSSQLLocalDB',
        //     database: 'akysb',
        //     encrypt: true
        // }
        user: "aarshad_admin",// server username
        password: "P@ssw0rd", //server password
        database: "akysb", // server default database name
        server: "aarshad-testdb.database.windows.net",
        connectionTimeout: 60000,
        database: "akysb",
        options: {
            database: "akysb",
            encrypt: true
        }
    },
    serverPort: 8888
}