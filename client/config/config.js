module.exports = {
    "development": {
      "username": "root",
      "password": process.env.DB_PASS || "SDY5010j",
      "database": process.env.DB_NAME || "givingtreedatabase",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "SDY5010j",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
  