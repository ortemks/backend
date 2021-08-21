let {Schema, model} = require('mongoose');
let schema = new Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    }
})
module.exports = model('product', schema);