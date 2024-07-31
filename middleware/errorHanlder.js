import { logEvents } from "./logEvents.js";

const errorHanlder = (err, req, res, next) => {
    console.log(err.stack);
    logEvents(err.message, 'errLog.txt');
    res.status(500).json(err.message);
}

export default errorHanlder;