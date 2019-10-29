'use strict';

const Tweet = (sequelize, Sequelize) => { 
    return ( sequelize.define('Tweet', {
        tweetId: { 
            type: Sequelize.BIGINT(20), 
            primaryKey: true,
        },
        userId: {
            type: Sequelize.BIGINT(20),
        },        
        createdAt: {
            type: Sequelize.DATE,
        },
        text: {
            type: Sequelize.STRING(280),
        },
        }, {
            updatedAt: false,
            id: false,
            createdAt: false
        }
    ));
};

module.exports = Tweet;
