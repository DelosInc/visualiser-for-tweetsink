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
db.user = require('./models/Profile')(sequelize, Sequelize);
db.hashtag = require('./models/Hashtag')(sequelize, Sequelize);
db.hashtagTweet = require('./models/HashtagTweet')(sequelize, Sequelize);
db.url = require('./models/Url')(sequelize, Sequelize);

db.tweet.belongsTo(db.user, {foreignKey: 'userId'});
db.tweet.hasMany(db.hashtagTweet, {foreignKey: 'tweetId'});
db.hashtagTweet.belongsTo(db.hashtag, {foreignKey: 'hashtagId'});

module.exports = db;
