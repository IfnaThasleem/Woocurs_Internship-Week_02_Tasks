import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaUserPlus, FaUsers, FaInfoCircle, FaEnvelope, FaHome 
} from 'react-icons/fa';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #0d1b2a, #1b263b)' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-white" to="/">Student Management</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
            <li className="nav-item d-flex align-items-center nav-hover">
                <Link className="nav-link text-white d-flex align-items-center px-2" to="/">
                  <FaHome className="me-1 icon" /> Home
                </Link>
              </li>
              <span className="navbar-separator mx-2">|</span>
              <li className="nav-item d-flex align-items-center nav-hover">
                <Link className="nav-link text-white d-flex align-items-center px-2" to="/registration">
                  <FaUserPlus className="me-1 icon" /> Register
                </Link>
              </li>
              <span className="navbar-separator mx-2">|</span>
              <li className="nav-item d-flex align-items-center nav-hover">
                <Link className="nav-link text-white d-flex align-items-center px-2" to="/users">
                  <FaUsers className="me-1 icon" /> Users
                </Link>
              </li>
              <span className="navbar-separator mx-2">|</span>
              <li className="nav-item d-flex align-items-center nav-hover">
                <Link className="nav-link text-white d-flex align-items-center px-2" to="/about">
                  <FaInfoCircle className="me-1 icon" /> About
                </Link>
              </li>
              <span className="navbar-separator mx-2">|</span>
              <li className="nav-item d-flex align-items-center nav-hover">
                <Link className="nav-link text-white d-flex align-items-center px-2" to="/contact">
                  <FaEnvelope className="me-1 icon" /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4 mt-auto" style={{ background: 'linear-gradient(90deg, #0d1b2a, #1b263b)' }}>
        <div className="container text-center text-white">
          <p className="mb-2">&copy; {new Date().getFullYear()} Student Management App</p>
          <p className="mb-3">
            Built with <span className="fw-bold">React</span> and <span className="fw-bold">Firebase</span> | Developed by Ifna Thasleem
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>

      {/* Inline CSS */}
      <style>
        {`
          /* Navbar links hover */
          .nav-hover .nav-link {
            color: #fff;
            transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
          }
          .nav-hover .nav-link:hover {
            color: #00bfff;
            transform: scale(1.1);
            text-shadow: 0 0 8px #00bfff, 0 0 12px #00bfff;
          }
          /* Icons inside links */
          .nav-hover .icon {
            transition: transform 0.3s, color 0.3s, text-shadow 0.3s;
          }
          .nav-hover .nav-link:hover .icon {
            color: #00bfff;
            transform: scale(1.2);
            text-shadow: 0 0 6px #00bfff;
          }
          .navbar-separator {
            color: #fff;
            font-weight: bold;
          }
          /* Social icons */
          .social-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #1b3b5a;
            color: #fff;
            transition: transform 0.3s, background 0.3s;
          }
          .social-icon:hover {
            background: #00bfff;
            color: #000;
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
