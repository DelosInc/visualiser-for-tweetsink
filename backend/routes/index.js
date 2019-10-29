'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('tweets/:tweetId', (req, res) => {
    db.tweet.find({
        where: {
            userId: req.param.tweetId,
        }
    }, {
        include: [ 
            {model: user}
        ]
    }).then((tweet) => {
        res.send({
            result: 1,
            tweet: tweet,
        })
    })
});

router.get('/tweets', (req, res) => {
    db.tweet.findAll({
        orderBy: "createdAt"
    })
    .then((tweets) => {
        res.send({
            tweets: tweets,
        })
    })
});

router.get('/', (req, res) =>  {
    db.tweet.count()
    .then((count) => {
        res.send({
            count: count,
        })
    })
});

module.exports = router;
