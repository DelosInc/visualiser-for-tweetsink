'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) =>  {
    db.tweet.count()
    .then((count) => {
        res.send({
            count: count,
        })
    })
    // comment above and uncomment below to view all tweets
    //
    // db.tweet.findAll({
    //     orderBy: "createdAt"
    // })
    // .then((tweets) => {
    //     res.send({
    //         tweets: tweets,
    //     })
    // })
    //
});

module.exports = router;
