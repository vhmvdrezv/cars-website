import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const carSchema = new Schema({
    imageUrl: String,
    name: {type: String, required: true},
    description: String
});

export default mongoose.model('cars', carSchema);