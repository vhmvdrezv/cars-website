import Car from '../model/Car.js';

const getAllCars = async (req, res, next) => {
    try {
        if (!req.query.limit) {
            const result = await Car.find().exec();
            return res.status(200).json(result);
        }

        const limit = parseInt(req.query.limit)
        if (isNaN(limit)) {
            return res.status(400).json({ msg: 'query must be a valid number' });
        }

        const result = await Car.find().limit(limit).exec();
        res.status(200).json(result);
        
    } catch (err) {
        console.log(err.stack);
        res.status(500).send({ msg: 'Server error' });
    } 
}


export { getAllCars };