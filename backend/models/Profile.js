'use strict';

const Profile = (sequelize, Sequelize) => {
    return ( sequelize.define('user', {
        id: {
            type: Sequelize.BIGINT(20),
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        description: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
        },
        favoritesCount: {
            type: Sequelize.INTEGER,
        },
        followersCount: {
            type: Sequelize.INTEGER,
        },
        friendsCount: {
            type: Sequelize.INTEGER,
        },
        }, {
            updatedAt: false,
            id: false,
            createdAt: false
        }
    ));
}

module.exports = Profile;