import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getIndex = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

const getCarsPage = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'cars.html'));
};

const getLoginPaga = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'login.html'));
};

const getContactPage = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
};

const getLoginPage = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'login.html'));
};

const getSignupPage = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'signup.html'))
}


export { getIndex, getCarsPage, getLoginPaga, getContactPage, getLoginPage, getSignupPage };