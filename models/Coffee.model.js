const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    haveCoffeine: Boolean,
    ml: Number,
    description: String

})

const Coffee = mongoose.model('Coffee', coffeeSchema)

module.exports = Coffee