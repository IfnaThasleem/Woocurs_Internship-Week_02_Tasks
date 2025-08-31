# 📝 Student Registration & Management System

---

## 💻 Woocurs Internship – Week 02 Tasks
This repository documents my daily progress during the second week (Day 6 to Day 10) of my Woocurs Internship. The project I worked on is a Student Registration & Management System using React, Firebase Firestore, and Bootstrap.

---

## 📅 Week 02 – Task Log

# Day 6 – Registration Page
- Created Registration.js for adding new students
- Implemented automatic registration number generation
- Added form fields: Name, Email, Phone
- Applied validation for input fields
- Styled form with Bootstrap cards and custom CSS
- Connected form to Firebase Firestore for storing student data

# Day 7 – User List Page
- Created UserList.js to display all registered students
- Implemented search functionality by Name, Email, or Registration Number
- Added sortable columns for easy data organization
- Added Edit and Delete actions for each user
- Styled table with hover effects and responsive design

# Day 8 – Edit Student
- Integrated React Router's useParams for editing users
- Prefilled registration form with existing student data
- Enabled updating student data in Firebase
- Added automatic navigation to Users page after editing
- Ensured form validation remains functional during editing

# Day 9 – Fixes & Optimizations
- Fixed React Hook useEffect ESLint warnings
- Ensured automatic registration number generation works for new students
- Enhanced UX/UI with consistent styling
- Added hover effects on buttons for better interactivity

# Day 10 – Finalizing CRUD
- Finalized full CRUD functionality with Firebase Firestore
- Tested adding, editing, deleting, and viewing students
- Ensured responsive design for mobile and desktop
- Prepared project for deployment and GitHub documentation

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router DOM, Bootstrap 5, React Icons
- **Backend / Database:** Firebase Firestore
- **Tools:** VSCode, Chrome DevTools, Firebase Console

---
## 📂 Project Structure
```plaintext
/student-management
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Registration.js
│   │   ├── UserList.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Layout.js
│   ├── App.js
│   ├── firebase.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 How to Run

- Clone the repository:
```bash
git clone https://github.com/YourUsername/student-management.git
cd student-management
```
- Install dependencies:
```bash
npm install
```
- Configure Firebase:
  - Create a Firebase project and Firestore database
  - Copy Firebase config to firebase.js
    ```bash
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    ```
- Start the development server:
```bash
npm start
```
- Open http://localhost:3000 in your browser.

----

## 👩‍💻 Author
***Ifna Thasleem***

---

✨ This README represents my Week 02 (Day 6 – Day 10) tasks during the Woocurs Internship.
