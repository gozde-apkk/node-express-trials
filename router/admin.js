


const express = require('express');
const router = express.Router();

const app = express();


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
app.use('/product', (req , res, next) => {
    //db kayıt
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;