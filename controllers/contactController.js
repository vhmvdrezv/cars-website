import Contact from '../model/Contact.js'

const createContact = async (req, res, next) => {
    try {
        const {name, email, message} = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ msg: 'some field missing' });
        }
    
        const result = await Contact.create({name: name, email: email, message: message});
        res.status(201).json(result);
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });
    }
};

const getContactById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const exist = await Contact.findById(id);
        if (!exist) return res.status(404).json({ message: 'id not found' });

        const result = await Contact.findById(id).exec();
        res.status(200).json(result);
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });
    }
}

const getAllContacts = async (req, res, next) => {
    try {
        if (!req.query.limit) {
            const result = await Contact.find().exec();
            return res.status(200).json(result);
        }
    
        const limit = req.query.limit;
        if (isNaN(limit)) return res.status(400).json({ message: 'limit must be a number' });
    
        const result = await Contact.find().exec();
        res.status(200).json(result);
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });
    }
};

const deleteContact = async (req, res, next) => {
    try {
        const id = req.params.id;

        const exist = await Contact.findById(id);
        if (!exist) return res.status(404).json({ message: 'id not found' });
    
        const result = await Contact.findByIdAndDelete(id).exec();
        res.status(200).json(result);    
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });

    }
};

const updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const exist = await Contact.findById(id);
        if (!exist) return res.status(404).json({ message: 'id not found' });
    
        const {name, email, message} = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ msg: 'some field missing' });
        }
    
        const result = await Contact.findByIdAndUpdate(id, { name: name, email: email, message: message }).exec();
        console.log(result);
        res.status(200).json({ message: 'done' });
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });
    }
    
};

export { createContact, getAllContacts, deleteContact, updateContact, getContactById };