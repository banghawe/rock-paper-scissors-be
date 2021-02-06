require('dotenv').config()

module.exports = {
  development: {
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  },
  production: {
    dialect: process.env.DB_CONNECTION,
    use_env_variable: process.env.DATABASE_URL,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  },
}
