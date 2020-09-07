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
const active = mongoose.model('active', schema)
let arr = [{
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },
    {
        img: '',
        time: '',
        type: '',
        tPrice: '',
        price: '',
        title: '',
        oriPrice: '',
        label: '',
        noDiscount: ''
    },

]
async function create() {
    for (let i = 0; i < arr.length; i++) {
        console.log(await clothes.create(arr[i]));
    }
}
create()
module.exports = {
    active
}