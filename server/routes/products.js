const express = require('express')
const router = express.Router()
const config = require('../config/dev');
const app = express()
var products = [];
var product = require('../model/product');
var bodyParser = require('body-parser')

router.use(express.json())
router.use(bodyParser.urlencoded({ extended: true }))
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: config.DB_pass,
    port : 3306,
    insecureAuth : true,
    database: 'test_db'
  });
  
router.get('', function(req, res, next) {
    con.connect(function(err) {
        if (err) throw err;
        const sql = 'select * from product';
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          console.log(result);
          products = result;    
        });
      });
    res.json(products);
});

router.get('/:productId', function(req, res) {
    const productId = req.params.productId;
    con.connect(function(err) {
        if (err) throw err;
        const sql_1 = 'select * from product where id = ?';
        con.query(sql_1,productId ,function (err, result) {
            console.log("ok")
            if (err){
                return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
            };
            if(result.length >= 1){
                console.log("OK")
            }else{
                return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})                
            }
          console.log(result);
          product = result;
          return res.json(product);
        });
    });
});

router.post('/create', function(req, res, next) {
    console.log("OK")

    console.log(req.body)
    con.connect(function(err) {
        if (err) throw err;
        const sql_1 = 'Insert into product (name,price,description,heading1,heading2,heading3,headingtext1,headingtext2,headingtext3,coverimage,image)values(?,?,?,?,?,?,?,?,?,?,?)';
        con.query(sql_1,[req.body.name,req.body.price,req.body.description,req.body.heading1,req.body.heading2,req.body.heading3,req.body.headingtext1,req.body.headingtext2,req.body.headingtext3,req.body.coverimage,req.body.image],function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
    return res.json({'OK':true})
});

module.exports = router