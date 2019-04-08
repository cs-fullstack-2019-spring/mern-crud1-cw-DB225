const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   product_id: Number,
   product_price: String,
    product_quantity: Number
});

module.exports = mongoose.model('product', ProductSchema);