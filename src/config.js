'use strict';
module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://noteful@localhost/noteful-server',
};