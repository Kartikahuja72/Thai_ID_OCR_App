// crud.js

const DataModel = require('../model/Data');

async function createOrUpdateInDatabase(data) {
    try {
        const existingData = await DataModel.findOne({ IdentificationNumber: data.IdentificationNumber });

        if (existingData) {
            // Update existing data
            const updatedData = await DataModel.findOneAndUpdate(
                { IdentificationNumber: data.IdentificationNumber },
                { $set: data },
                { new: true }
            );
            return updatedData;
        } else {
            // Create new data
            const newData = new DataModel(data);
            const savedData = await newData.save();
            return savedData;
        }
    } catch (error) {
        throw error;
    }
}

async function readData(identificationNumber) {
    try {
        const data = await DataModel.findOne({ IdentificationNumber: identificationNumber });
        return data;
    } catch (error) {
        throw error;
    }
}

async function deleteData(identificationNumber) {
    try {
        const deletedData = await DataModel.findOneAndDelete({ IdentificationNumber: identificationNumber });
        return deletedData;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createOrUpdateInDatabase,
    readData,
    deleteData,
};
