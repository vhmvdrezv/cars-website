import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import url from 'url';
import cors from 'cors';

import conncetDB from './config/dbConn.js';
import rootRouter from './routes/root.js';
import { logger } from './middleware/logEvents.js';
import carsRouter from './routes/api/cars.js';
import contactRouter from './routes/api/contact.js';
import authRouter from './routes/api/auth.js';
import errorHanlder from './middleware/errorHanlder.js';

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// connecting to mongodb
conncetDB();

// logs every request
app.use(logger);

// cors
const whiteList = ['https://www.google.com', 'http://localhost:8000', 'http://localhost:5500'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) != -1 || !origin) {
            callback(null, true);
        } else {
            const error = new Error('not allowed by CORS');
            callback(error);
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// api routers
app.use('/api/contact', contactRouter);
app.use('/api/cars', carsRouter);
app.use('/api/auth', authRouter);

// html handlers
app.use('/', rootRouter);

// error handler
app.use(errorHanlder)

// not found handler
app.all('/*', (req, res) => {
    if (req.accepts('html')) {
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    } else {
        res.status(404).json({ message: '404 not found' });
    }
});

mongoose.connection.once('open', async () => {
    console.log('connected to mongodb');
    app.listen(
        PORT,
        () => console.log(`Server is running on PORT ${PORT}`)
    );
});
