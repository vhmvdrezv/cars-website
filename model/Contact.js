import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
});

export default mongoose.model('contacts', contactSchema);