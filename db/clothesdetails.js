const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    swiper: [String],
    time: String,
    type: String,

    price: String,
    title: String,
    recomments: [String],
    select: [String],
    comment: String
})
const clothesdetails = mongoose.model('clothesdetails', schema);

module.exports = {
    clothesdetails
}