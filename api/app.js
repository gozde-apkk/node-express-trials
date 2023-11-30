


const express = require('express');
const app = express();
const bodyParser = require('body-parser');



const adminRoutes = require('../router/admin');
const userRoutes = require('../router/user');

app.use( './admin',  adminRoutes);
app.use('./user' ,  userRoutes);


app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next) => {
    res.send(` {

        <html>
        <head>
        <title>Add a New Product</title>
        </head>
        <body>
        <form action="/product" method="POST">
        <input type="text", name="productName" />
        <input type="submit", value="saveProduct" />
        </form>
        </body>
        </html>
    }`)

})

app.get('/' , (req ,res) =>{
    res.send(`
    {
        <h1>Hello</h1>
    }`)
});




app.listen(5000, () => {
    console.log('Listenin on port 5000');
} )


module.exports = app;