const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/images' })
const pool = require('../modules/pool');





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
    let queryText = 'SELECT * FROM "gallery" ORDER BY "id" DESC;';
    console.log(req.body)
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error =>{
            console.log('Query:', queryText, 'WE HAD AN ERROR =>', error);
            res.sendStatus(500);
        })
}); // END GET Route

//POST route
router.post('/', upload.single("avatar"),(req, res) =>{
    const newPic = req.body;
    console.log(req.file);
    let queryText = `INSERT INTO gallery (path, description)
                     VALUES ($1, $2)`;
    pool.query(queryText, [newPic.path, newPic.description])
        .then(result=>{
            console.log('added a picture!!=>', newPic);
            res.sendStatus(201);
        }).catch(error=>{
            res.sendStatus(500);
        })
})
//END POST route

//DELETE route
router.delete('/:id', (req, res)=>{
    const idToDelete = req.params.id;
    console.log(idToDelete);
    const queryText = 'DELETE FROM gallery WHERE "id" = $1'

    pool.query(queryText, [idToDelete])
        .then(result=>{
            res.sendStatus(200)
        }).catch(error =>{
            res.sendStatus(500);
        })
})
//END DELETE route

module.exports = router;