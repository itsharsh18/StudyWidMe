# Saarthi - EdTech Platform


StudyNotion is a comprehensive EdTech platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless learning experience for students and an intuitive course creation and management system for instructors.

## 🚀 Features

### For Students
- **Account Creation & Authentication** - Secure signup/login with JWT and role-based access
- **Course Exploration** - Browse, search, and filter through available courses
- **Course Enrollment** - Purchase courses using secure Razorpay integration
- **Learning Experience** - Access course content, track progress, and complete lessons
- **Progress Tracking** - Monitor completed lessons, scores, and overall course progress
- **Reviews & Ratings** - Share feedback on completed courses

### For Instructors
- **Course Management** - Create, update, and manage courses and their content
- **Media Handling** - Upload and organize videos, attachments, and resources
- **Comprehensive Dashboard** - Monitor enrollments, revenue, and course performance
- **Analytics Visualization** - View key metrics with intuitive charts and graphs
- **Student Management** - Track student progress and engagement

### For Administrators
- **Platform Management** - Oversee all courses, users, and activities
- **Category Management** - Create and manage course categories
- **Approval System** - Review and approve course submissions
- **Revenue Tracking** - Monitor platform's financial performance

## 🖼️ Screenshots

<div align="center">
  <img src="https://github.com/himanshu8443/Study-Notion-master/assets/99420590/0cba8d5b-6a47-4721-ac9f-4279107c257e" alt="Home Page" width="80%"/>
  <p><em>Home Page</em></p>
  
  <img src="https://github.com/himanshu8443/Study-Notion-master/assets/99420590/62c33b56-0bd5-4330-b1db-d41b80d9f69f" alt="Course Page" width="80%"/>
  <p><em>Course Page</em></p>
  
  <img src="https://github.com/himanshu8443/Study-Notion-master/assets/99420590/63f7163d-a74a-4e78-bc78-6b96b06073f9" alt="Instructor Dashboard" width="80%"/>
  <p><em>Instructor Dashboard</em></p>
  
  <img src="https://github.com/himanshu8443/Study-Notion-master/assets/99420590/59d1d8c2-2824-45bb-a2f7-6f5dc234895c" alt="Learning Interface" width="80%"/>
  <p><em>Learning Interface</em></p>
</div>

## 🛠️ Technologies Used

### Frontend
- React.js
- Redux for state management
- Tailwind CSS for styling
- Chart.js for data visualization
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Bcrypt for password hashing

### Payment Integration
- Razorpay

### Deployment
- Render/Vercel/AWS (specify which one you're using)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- MongoDB (local or Atlas URI)
- npm or yarn

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsharsh18/studynotion.git
   cd studynotion
   ```

2. **Install dependencies for frontend**
   ```
   npm install at src folder 
   *Npm run dev
   ```

3. **Install dependencies for backend**
   ```bash
   cd server
   npm install
   ```

4. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Create another `.env` file in the `server` directory
   - Add the required variables as specified in the `.env.example` files

5. **Set up the database**
   - Make sure MongoDB is running
   - The application will create required collections automatically

6. **Run the application**
   ```bash
   # From the root directory
   npm run dev
   ```

7. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:4000](http://localhost:4000)

## ⚠️ Important Notes

- **Category Creation**: Before adding courses, you must create categories first. This requires an Admin account.
- **Admin Account Setup**: 
  1. Sign up with a regular student/instructor account
  2. Access your MongoDB database
  3. Locate your user document in the `users` collection
  4. Change the `accountType` field to `"Admin"`
  5. Log back in and access the admin panel from the dashboard

## 🗂️ Project Structure

```
studynotion/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── server/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔒 Environment Variables

### Frontend (.env)
```
REACT_APP_BASE_URL=http://localhost:4000/api
REACT_APP_RAZORPAY_KEY=your_razorpay_key_id
```

### Backend (server/.env)
```
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
MAIL_HOST=your_mail_host
MAIL_USER=your_mail_username
MAIL_PASS=your_mail_password
```

## 📝 API Documentation

For detailed API documentation, visit [http://localhost:4000/api-docs](http://localhost:4000/api-docs) after starting the server.

## 🔄 Workflow

1. **User Registration/Login**: Users can register as students or instructors
2. **For Students**:
   - Browse available courses
   - Purchase and enroll in courses
   - Access course content and track progress
3. **For Instructors**:
   - Create and publish courses
   - Add course content and resources
   - Track student enrollments and revenue
4. **For Admins**:
   - Manage categories
   - Review and approve courses
   - Monitor platform activities

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Razorpay](https://razorpay.com/)

## 📧 Contact

For questions or support, please email: itsharshjha18@gmail.com

---

Developed with ❤️ by Harsh Jha