const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://admin:ruaegito50@cluster0.xqtifcp.mongodb.net/test');
}

module.exports = startDB;
