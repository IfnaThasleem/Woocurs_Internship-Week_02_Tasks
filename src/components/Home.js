import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaUsers, FaEdit } from 'react-icons/fa';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-white py-5" style={{ background: 'linear-gradient(135deg, #1b3b5a, #0f3057)' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Student Management App</h1>
          <p className="lead mt-3">
            Efficiently manage student registrations, view users, and maintain records in real-time.
          </p>
          <div className="mt-4">
            <Link to="/registration" className="btn btn-light btn-lg me-2 shadow-sm">
              <FaUserPlus className="me-2" /> Register
            </Link>
            <Link to="/users" className="btn btn-secondary btn-lg me-2 shadow-sm">
              <FaUsers className="me-2" /> View Users
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: '#0f3057' }}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-white">App Features</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0 hover-scale" style={{ background: '#1b3b5a', color: '#fff' }}>
                <div className="card-body">
                  <FaUserPlus size={50} className="text-primary mb-3" />
                  <h5 className="card-title fw-bold">Register Students</h5>
                  <p className="card-text">
                    Quickly add new students with proper validation for accurate data entry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0 hover-scale" style={{ background: '#1b3b5a', color: '#fff' }}>
                <div className="card-body">
                  <FaUsers size={50} className="text-success mb-3" />
                  <h5 className="card-title fw-bold">View Users</h5>
                  <p className="card-text">
                    View all registered students in a searchable and sortable table or mobile-friendly cards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0 hover-scale" style={{ background: '#1b3b5a', color: '#fff' }}>
                <div className="card-body">
                  <FaEdit size={50} className="text-warning mb-3" />
                  <h5 className="card-title fw-bold">Edit & Delete</h5>
                  <p className="card-text">
                    Update student information or remove users safely with confirmation modals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for hover effects */}
      <style>
        {`
          .hover-scale:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease-in-out;
          }
          .btn-lg svg {
            vertical-align: middle;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
