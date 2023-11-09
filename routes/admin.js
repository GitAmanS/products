const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.get('/add-products', (req, res, next)=>{

    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`);
});

router.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.send(`<h1>${req.body.title}</h1>`);
    res.redirect('/');
})

module.exports = router;