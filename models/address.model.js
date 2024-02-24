const { default: mongoose } = require("mongoose")


const addressSchema = new mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pinCode: Number
})

module.exports = mongoose.model("Address", addressSchema)


