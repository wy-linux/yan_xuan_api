const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    img: String,
    time: String,
    type: String,
    tPrice: String,
    price: String,
    title: String,
    oriPrice: String,
    label: String,
    noDiscount: String,

})
const clothes = mongoose.model('clothes', schema)

module.exports = {
    clothes
}