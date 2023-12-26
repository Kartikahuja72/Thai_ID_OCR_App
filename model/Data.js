const mongoose = require('mongoose');

const database_link = "mongodb+srv://db_user:JDBPPO2XbtOfFMYd@cluster0.feeysc9.mongodb.net/dataa?retryWrites=true&w=majority";

mongoose.connect(database_link)
    .then(async function (db) {
        console.log('Database Successfully Connected');
    })
    .catch(function (err) {
        console.log('Database Connection Error: ', err);
    })

const dataSchema = new mongoose.Schema({
    IdentificationNumber: String,
    Name: String,
    LastName: String,
    DateOfBirth: String,
    DateOfIssue: String,
    DateOfExpiry: String,
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
