// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Registration from './components/Registration';
import UserList from './components/UserList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* New registration */}
          <Route
            path="/registration"
            element={
              <Registration
                users={users}
                setUsers={setUsers}
              />
            }
          />
          {/* Edit registration */}
          <Route
            path="/registration/:id"
            element={
              <Registration
                users={users}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="/users"
            element={
              <UserList
                users={users}
                setUsers={setUsers}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
