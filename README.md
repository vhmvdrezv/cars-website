# Car Website

A full-stack web application for a car dealership/showcase website built with Node.js, Express.js, and MongoDB. The application features user authentication, car listings, and a contact system.

## 🚗 Features

- **User Authentication**: Secure user registration and login system with bcrypt password hashing
- **Car Listings**: Display and browse available cars with images and descriptions
- **Contact System**: Contact form with CRUD operations for inquiries
- **Responsive Design**: Mobile-friendly interface
- **Error Handling**: Comprehensive error logging and handling
- **CORS Configuration**: Secure cross-origin resource sharing
- **Request Logging**: Automatic logging of all requests and errors

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **cors** - Cross-Origin Resource Sharing
- **uuid** - Unique identifier generation
- **date-fns** - Date formatting utilities

### Frontend
- **HTML5** - Markup language
- **CSS3** - Styling
- **JavaScript** - Client-side scripting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/car-website.git
   cd car-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=8000
   DATABASE_URI="mongodb://localhost:27017/cars"
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # On Windows
   net start MongoDB
   ```

5. **Run the application**
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:8000`

## 📁 Project Structure

```
car-website/
├── config/
│   └── dbConn.js           # Database connection configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   ├── carsController.js   # Car operations
│   ├── contactController.js # Contact form operations
│   └── rootController.js   # Route handlers for HTML pages
├── logs/
│   ├── errLog.txt         # Error logs
│   └── reqLog.txt         # Request logs
├── middleware/
│   ├── errorHandler.js    # Global error handling
│   └── logEvents.js       # Logging utilities
├── model/
│   ├── Car.js             # Car schema
│   ├── Contact.js         # Contact schema
│   └── User.js            # User schema
├── public/                # Static files (CSS, images, scripts)
├── routes/
│   ├── api/
│   │   ├── auth.js        # Authentication routes
│   │   ├── cars.js        # Car API routes
│   │   └── contact.js     # Contact API routes
│   └── root.js            # HTML page routes
├── views/
│   ├── 404.html           # 404 error page
│   ├── cars.html          # Cars listing page
│   ├── contact.html       # Contact form page
│   ├── index.html         # Homepage
│   ├── login.html         # Login page
│   └── signup.html        # Registration page
├── .env                   # Environment variables
└── server.js              # Main application file
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - User login

### Cars
- `GET /api/cars` - Get all cars (supports `?limit=n` query parameter)

### Contact
- `POST /api/contact` - Create a new contact message
- `GET /api/contact` - Get all contact messages (supports `?limit=n` query parameter)
- `GET /api/contact/:id` - Get a specific contact message
- `PUT /api/contact/:id` - Update a contact message
- `DELETE /api/contact/:id` - Delete a contact message

### Pages
- `GET /` - Homepage
- `GET /cars` - Cars listing page
- `GET /loginpage` - Login page
- `GET /signuppage` - Registration page
- `GET /contactuspage` - Contact form page

## 📊 Database Schema

### User Schema
```javascript
{
  username: String (required),
  email: String (required),
  password: String (required, hashed)
}
```

### Car Schema
```javascript
{
  imageUrl: String,
  name: String (required),
  description: String
}
```

### Contact Schema
```javascript
{
  name: String (required),
  email: String (required),
  message: String (required)
}
```

## 🔒 Security Features

- **Password Hashing**: User passwords are hashed using bcrypt with salt rounds
- **CORS Protection**: Configured whitelist for allowed origins
- **Input Validation**: Server-side validation for all form inputs
- **Error Handling**: Secure error messages without exposing sensitive information

## 📝 Logging

The application automatically logs:
- All incoming requests (method, origin, path) in `logs/reqLog.txt`
- All errors with timestamps and unique IDs in `logs/errLog.txt`

## 🚦 Usage Examples

### Register a new user
```bash
curl -X POST http://localhost:8000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

### Login
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "password": "securepassword123"
  }'
```

### Get cars with limit
```bash
curl http://localhost:8000/api/cars?limit=5
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 TODO / Future Enhancements

- [ ] Add JWT token authentication
- [ ] Implement car search and filtering
- [ ] Add image upload functionality
- [ ] Create admin dashboard
- [ ] Add pagination for large datasets
- [ ] Implement email notifications for contact forms
- [ ] Add car booking/reservation system
- [ ] Create REST API documentation with Swagger

## 🐛 Known Issues

- Contact form action in HTML points to `/contact` but should be `/api/contact`
- Signup form action points to `/api/signup` but should be `/api/auth/signup`
- Some typos in function names (e.g., `conncetDB`, `errorHanlder`, `getLoginPaga`)

## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- MongoDB team for the robust database solution
- All contributors who helped improve this project
