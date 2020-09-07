const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,

        minlength: 6,
        maxlength: 16
    },
    vip: {
        type: Number,
        default: 0
    },
    carlist: {
        type: [Object],

    }

})
const User = mongoose.model('User', schema)


module.exports = {
    User
}