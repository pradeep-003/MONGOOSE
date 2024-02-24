const mongoose = require('mongoose')
const user_model = require('./models/user.model')
const address_model = require('./models/address.model')
/**
 * I would like to connect with the MongoDB
 * 
 * Event Driven
 */

mongoose.connect("mongodb://localhost/mongo_db");
const db = mongoose.connection;

db.once("open", ()=>{
    console.log("Yaay ! Connected to MongoDB")

    //Time to insert some documents
    init()
    //dbQueries()
})

db.on("error", ()=>{
    console.log("Error while connecting to DB")
})


async function dbQueries(){
    // Reading/Fetching the data from MongoDB
    // const user = await user_model.findById("65d76d289e6b4d2ea0678b8c"); // -- Fetch by id
    // console.log(user)  
/*   Fetch using name
    try{
        const users = await user_model.find({name: "Rahuls"})
        console.log(users)
    }catch(err){
        console.log("Error while reading from the DB ", err)
    }
*/

/* if there are many similar name in DB & i want to find only one
    try{
        const users = await user_model.findOne({name: "Rahuls"})
        console.log(users)
    }catch(err){
        console.log("Error while reading from the DB ", err)
    }
*/

// Read with the help of where clause
/* 
try{
    const users = await user_model.where("age").lt(50).where("name").equals("Vishwa").limit(5)
    console.log(users)
}catch(err){
    console.log("Error while reading from the DB ", err)
}
*/

// Update the record
/*
try{
    const users = await user_model.findOne({name: "Rahul"})

    users.hobby = "Playing Cricket" //-- not added hobby
    users.email = "Rahu@gmail.com"
    const user_updated = await users.save()

    console.log(user_updated)
}catch(err){
    console.log("Error while reading from the DB ", err)
}
*/

// Deleting the documents
/*
const userRec = await user_model.deleteOne({name: "Pradeep"})
console.log(userRec)
const users = await user_model.find({name: "Pradeep"})
console.log(users)
*/
}

async function init(){

    /*
    // Logic to insert the document inside the DB
    const user_obj = {
        name: "Sachin",
        age: 27,
        email: 'sas@gmail.com',
        Subjects: ["Batting", "Bowling", "Catching"],
        address: {
            lane1: "lane1",
            lane2: "lane2",
            street: "OMR",
            city: "Bankok",
            country: "Thailand",
            pinCode: 121333
        }
    }
    

    try{
    //Inserted inside the Users collection
    const user = await user_model.create(user_obj);
    console.log("User created", user)
    }catch(err){
        console.log("Error while inserting ", err)
    }

    */

/**
 * 1. Create/insert an address object 
 * 2. Insert the user object with address object id
 */

        const address = {
            lane1: "lane1",
            lane2: "lane2",
            street: "OST",
            city: "Delhi",
            country: "India",
            pinCode: 100222        
        }
        const add_obj = await address_model.create(address)
        const user_obj = {
            name: "Pradeep",
            age: 29,
            email: "pra@gmail.com",
            Subjects:["Node.js","Java","MongoDB"],
            address: add_obj._id
        }
        const user = await user_model.create(user_obj)
        console.log(user)
}



