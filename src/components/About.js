// About.js
import React from 'react';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

function About() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg p-5 rounded-4" style={{ background: '#0f3057', color: '#fff' }}>
        <h2 className="card-title text-center mb-4 fw-bold">
          <FaInfoCircle className="me-2 text-warning" /> About Student Management App
        </h2>

        <p className="card-text mb-3" style={{ lineHeight: '1.6' }}>
          This app is designed to help you manage student data efficiently. You can:
        </p>

        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item d-flex align-items-center">
            <FaCheckCircle className="me-2 text-success" /> Register new students
          </li>
          <li className="list-group-item d-flex align-items-center">
            <FaCheckCircle className="me-2 text-success" /> View a list of all students
          </li>
          <li className="list-group-item d-flex align-items-center">
            <FaCheckCircle className="me-2 text-success" /> Edit or delete student information
          </li>
          <li className="list-group-item d-flex align-items-center">
            <FaCheckCircle className="me-2 text-success" /> Search and sort records dynamically
          </li>
        </ul>

        <p className="card-text mt-3">
          Built with <strong>React</strong> for the frontend and <strong>Firebase</strong> for database and authentication.
        </p>
      </div>

      {/* Inline CSS for interactive theme */}
      <style>
        {`
          .list-group-item {
            background: #1b3b5a;
            color: #fff;
            border: 1px solid #00bfff;
            border-radius: 6px;
            margin-bottom: 8px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
          }

          .list-group-item:hover {
            background: #0a243b;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,191,255,0.3);
          }

          .card-text strong {
            color: #00bfff;
          }

          .card h2 {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          @media (max-width: 768px) {
            .card {
              padding: 30px 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
