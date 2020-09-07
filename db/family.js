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
const Family = mongoose.model('Family', schema)


module.exports = {
    Family
}