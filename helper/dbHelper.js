const mongoose = require('mongoose');
const {dbMessage} = require('../constants')

let formatMongoData = (data) => {
    if(Array.isArray(data)) {
        let newDataList = [];
        for(let value of data) {
            newDataList.push(value.toObject());
        }
        return newDataList;
    }
    return data.toObject();
}


let checkObjectId = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(dbMessage.inValidID);
    }
}


module.exports = dbHelper = {
    formatMongoData,
    checkObjectId

}