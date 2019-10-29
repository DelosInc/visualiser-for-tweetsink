'use strict';

const Hashtag = (sequelize, Sequelize) => {
    return ( sequelize.define('hashtag', {
        hashId: {
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

module.exports = Hashtag;