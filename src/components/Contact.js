import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a network request with setTimeout
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000); // 1 second delay
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-5 rounded-4" style={{ background: '#0f3057', color: '#fff' }}>
        <h2 className="card-title text-center mb-4 fw-bold">
          <FaPaperPlane className="me-2 text-warning" /> Contact Us
        </h2>

        <div className="row">
          <div className="col-md-5 mb-4">
            <h5 className="mb-3 fw-bold">Get in Touch</h5>
            <p><FaEnvelope className="me-2 text-warning" /> ifna@gmail.com</p>
            <p><FaPhone className="me-2 text-warning" /> +94 771 234 567</p>
            <p><FaMapMarkerAlt className="me-2 text-warning" /> Kandy, Sri Lanka</p>
          </div>

          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control styled-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control styled-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control styled-input"
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success btn-lg shadow-lg px-5" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
          .styled-input {
            background: #1b3b5a;
            color: #fff;
            border: 1px solid #00bfff;
            border-radius: 6px;
            padding: 10px 12px;
            transition: all 0.3s ease-in-out;
          }

          .styled-input::placeholder {
            color: #b0c4de;
          }

          .styled-input:focus {
            background: #1b3b5a;
            color: #fff;
            border-color: #00bfff;
            box-shadow: 0 0 10px #00bfff;
            outline: none;
          }

          .btn:hover {
            transform: scale(1.05);
            transition: transform 0.3s;
          }
        `}
      </style>
    </div>
  );
}

export default Contact;
