var express = require('express');
var mysql = require('mysql2');
const config = require('./config/dev');

const productRoutes = require('./routes/products');

require('./routes/products');
delete(require.cache['./routes/products']);

const app = express();
// console.log('ここはOK')
app.use('/api/v1/products', productRoutes)

// const q = "insert into product(name,price,description,heading1,heading2,heading3,headingtext1,headingtext2,headingtext3,coverimage,image) values(?,?,?,?,?,?,?,?,?,?,?);"

// con.query(q, ['name',2005,'description','heading1','heading2','heading3','headingtext1','headingtext2','headingtext3','coverimage','image'], (err, result, fields) => {
//     if (err) throw err;
//     console.log(result)
// });

app.listen(3000);
