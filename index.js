const express = require('express');
const app = new express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dburl = 'mongodb+srv://someone:Artem1@cluster0.d25um.mongodb.net/Shop?retryWrites=true&w=majority';
const Product = require(`${__dirname}/schema`);
app.use(express.static(`${__dirname}/client`));
app.get('/api/products', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})
async function launch () {
    try {
        await mongoose.connect(dburl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        app.listen(port);
    } catch (err) {
        console.log(err);
    }
}
launch()
