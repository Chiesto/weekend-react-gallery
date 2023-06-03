const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = 'UPDATE gallery SET "likes" = "likes" +1 WHERE "id" = $1';

    pool.query(queryText, [galleryId])
        .then(result=>{
            res.sendStatus(200);
        }).catch(error=>{
            res.sendStatus(500);
        })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "gallery";';
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error =>{
            console.log('Query:', queryText, 'WE HAD AN ERROR =>', error);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;