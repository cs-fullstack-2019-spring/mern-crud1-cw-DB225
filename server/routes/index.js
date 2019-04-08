var express = require('express');
var router = express.Router();
var allProducts = require('../models/ProductSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crud1CW' });
});

//Post a new product
router.post('/add', (req,res)=>{
  allProducts.create({
    product_id: req.body.product_id,
    product_price: req.body.product_price,
    product_quantity: req.body.product_quantity
  }, (err,results)=>{
    if(err) res.send(err);
    else res.send(results);
  })
});

//Print out all the products
router.get('/products',(req,res)=>{
  allProducts.find({}, (err,results)=>{
    if(err) res.send(err);
    else res.send(results);
  })
});

//delete a product
router.delete('/delete', (req,res) =>{
    allProducts.deleteOne({
        product_id: req.body.product_id
    }, (errors)=>{
        if(errors) res.send(errors);
    });
});

module.exports = router;
