const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-products', (req, res, next)=>{

    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`);
});

app.use('/product', (req, res, next)=>{
    console.log(req.body);
    res.send(`<h1>${req.body.title}</h1>`);
    res.redirect('/');
})
app.use('/', (req, res, next)=>{

    res.send(`<h1>Hello from Expresss!</h1>`);
});

app.listen(3000);