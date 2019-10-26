'use strict';

const Tweet = (sequelize, Sequelize) => { 
    return ( sequelize.define('Tweet', {
        tweetId: { 
            type: Sequelize.BIGINT, 
            primaryKey: true,
        },
        userId: {
            type: Sequelize.BIGINT,
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
        })
    );
};

module.exports = Tweet;
