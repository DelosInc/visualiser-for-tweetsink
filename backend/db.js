'use strict';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('tweetsink', 'test', 'test', {
  host: 'localhost',
  dialect: 'mariadb'
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.tweet = require('./models/Tweet')(sequelize, Sequelize);

module.exports = db;
