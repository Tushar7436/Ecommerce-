const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    category: String,
    price: Number,
    quantity: Number,
    thumbnail: String,
    rating: Number,
    discountPercentage: Number,
    description: String,
    images: [String],
    itemTotal: Number,
    stock: Number,
    brand:String
});


const addressSchema = new mongoose.Schema({
  landmark: String,
  houseNo: String,
  city: String,
  pincode: String
});


const orderSchema = new mongoose.Schema({
  items: [itemSchema], 
  address: addressSchema, 
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now } 
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
