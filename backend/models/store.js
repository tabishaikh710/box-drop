const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeSchema = new Schema({
    storeName: { type: String, required: true },
    storeDescription: { type: String, required: true },
    storeAddress: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'users' },
    ownerName : { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'users' },
        



    date: { type: Date, required: true },
});

module.exports = mongoose.model('store', storeSchema, 'stores');
