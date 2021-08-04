module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: ' ',
            dialect: 'mysql',
            user: 'root',
            password: 'root',
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}