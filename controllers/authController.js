import bcrypt from 'bcrypt';
import User from '../model/User.js';

const createUser = async (req, res, next) => {

    try {

        const {username, email, password} = req.body;
        if (!username || !password || !email) return res.status(400).json({ message: 'some fields missing' });
        const duplicate = await User.findOne({username: username}).exec();
        console.log(duplicate);
    
        if (duplicate) {
            return res.status(409).json({ msg: 'conflict, change username.' });
        }
    
        const pwd = await bcrypt.hash(password, 10);
    
        const result = await User.create({username: username, email: email, password: pwd});
        console.log(result);
        res.status(201).json(result);
        
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });
    }    
}


const logInUser = async (req, res, next) => {
    const {username, password} = req.body;
    if ( !username || !password) return res.status(400).json({ message: 'some field missing' });

    try {
        const user = await User.findOne({ username: username });
        if (!user) return res.status(404).json({ message: 'username or password is not correct' });

        // retrieve hashed password and compare to passwored sent
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(404).json({ message: 'username or password is not correct' });

        res.status(200).json({ user });
        
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.message });
    }
}

export { createUser, logInUser };