📌 Project Overview

This project is a complete Full Stack Web Application developed using Node.js, Express, MongoDB, EJS, and JavaScript. It demonstrates core full-stack development concepts including server-side rendering, authentication, REST APIs, database integration, external API usage, and middleware features.

The application allows users to register, log in, view data from the database, and fetch real-time weather information using a third-party API. It fulfills internship tasks ranging from beginner to expert level by integrating frontend, backend, and database components into a single working system.


🧰 Technology Stack

 Frontend

* HTML5
* CSS3
* JavaScript
* EJS Templates

Backend

* Node.js
* Express.js

 Database

* MongoDB with Mongoose

Authentication

* JWT (JSON Web Token)
* bcrypt password hashing

 External Services

* OpenWeatherMap API

 Middleware & Tools

* express-rate-limit
* Custom Logger
* dotenv
* axios



 📂 Project Structure


fullstack-project/
│
├── server.js
├── package.json
├── .env
│
├── config/
│   └── db.js
│
├── middleware/
│   ├── auth.js
│   ├── logger.js
│   └── rateLimiter.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   ├── apiRoutes.js
│   └── pageRoutes.js
│
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   └── dashboard.ejs
│
├── public/
│   ├── css/style.css
│   └── js/script.js


⚙️ Installation & Setup

 1️⃣ Clone or Download


git clone <repo-link>
cd fullstack-project


 2️⃣ Install Dependencies


npm install


 3️⃣ Setup Environment Variables

Create `.env` file:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/fullstackDB
SECRET=mysecretkey
WEATHER_KEY=your_api_key_here

 4️⃣ Start MongoDB

Make sure MongoDB service is running locally.

 5️⃣ Run Server


node server.js


Open in browser:


http://localhost:3000


🚀 Application Workflow

 User Registration

1. User enters details in registration form
2. Client-side validation checks password length
3. Data sent to server
4. Server hashes password
5. Data stored in MongoDB

 User Login

1. User submits credentials
2. Server verifies password
3. JWT token generated
4. Token stored in browser

 Dashboard Interaction

* Fetch users from database
* Display API data
* Access external weather service

🔗 API Endpoints

Authentication

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /auth/register | Register new user |
| POST   | /auth/login    | Login user        |

Internal API

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/users     | Get all users |
| DELETE | /api/users/:id | Delete user   |

 External API

| Method | Endpoint                   |
| ------ | -------------------------- |
| GET    | /api/weather?city=CityName |

 🔐 Security Features

* Password hashing
* Token-based authentication
* Protected routes
* Rate limiting
* Request logging

🧪 Features Demonstrated

* Server-side rendering
* Form validation
* Responsive UI
* Dynamic DOM interaction
* RESTful API communication
* Database persistence
* External API integration
* Middleware processing

🖥 Sample Output Flow

1. Open homepage
2. Register account
3. Login successfully
4. Redirect to dashboard
5. View stored users
6. Fetch weather data
7. Monitor logs in terminal

📈 Future Enhancements

* UI design upgrade with Bootstrap
* Role-based access control
* Password reset feature
* Email verification
* Deployment to cloud platform

👤 Author

Developed as part of Full Stack Development internship task completion.

 📜 License

This project is intended for educational and demonstration purposes.
