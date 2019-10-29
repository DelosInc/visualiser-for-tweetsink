'use strict';

const Url = (sequelize, Sequelize) => {
    return ( sequelize.define('url', {
        tweetId: {
            type: Sequelize.BIGINT,
            primaryKey: true,
        },
        }, {
            updatedAt: false,
            id: false,
            createdAt: false
        }
    ));
}

module.exports = Url;