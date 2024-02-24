/**
 * Logic to create User collection
 * Logic to define the schema of user collection
 */

const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pinCode: Number
}) 


const userSchema = new mongoose.Schema({
    name:{ 
       type: String,
       required: true
    },
    age:{
        type: Number,
        min: 19
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        minLenght: 11
    },
    Subjects: [String],
    // address: addressSchema
    address:{
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Address"
    }
},{timestamps: true, versionKey: false})

module.exports = mongoose.model("User", userSchema)


