'use strict';

const HashtagTweet = (sequelize, Sequelize) => {
    return ( sequelize.define('hashtagtweet', {
        tweetId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
        },
        hashId: {
            type: Sequelize.BIGINT,
        },
        }, {
            updatedAt: false,
            id: false,
            createdAt: false
        }
    ));
}

module.exports = HashtagTweet;