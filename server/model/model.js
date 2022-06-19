/**
 * This file includes all the mongoDB  schemas
 */

const mongoose = require('mongoose');

// first specify the shape of the document
var schema = new mongoose.Schema({
   name:{
    type: String,
    required: true
   },
   email: {
    type: String,
    required: true,
    unique: true
   },
   gender: String,
   status: String 
});

// Make the document model
const UserDB = mongoose.model('userDataBase', schema);

module.exports = UserDB;