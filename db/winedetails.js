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

const winedetails = mongoose.model('winedetails', schema)

module.exports = {
    winedetails
}