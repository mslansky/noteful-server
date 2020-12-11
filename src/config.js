'use strict';

require('dotenv').config();


module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'connectionString': process.env.DATABASE_URL || 'postgres://bsjyvyjlogahtp:fe42fb12f911cf17c2f8bc99fb590e7648ebe1ab4c597093710404d04f70420c@ec2-50-17-218-108.compute-1.amazonaws.com:5432/d8gjq8vh12t43k',
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || '5432a9d2-f030-4d76-b8df-1409026e4b54',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://bsjyvyjlogahtp:fe42fb12f911cf17c2f8bc99fb590e7648ebe1ab4c597093710404d04f70420c@ec2-50-17-218-108.compute-1.amazonaws.com:5432/d8gjq8vh12t43k',
};