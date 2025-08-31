import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, doc, updateDoc, query, orderBy, limit, getDocs, getDoc } from "firebase/firestore";
import { FaUserPlus } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

function Registration({ users, setUsers }) {
  const [regNo, setRegNo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { id } = useParams(); // Get user id from URL
  const navigate = useNavigate();
  const isEditing = !!id;

  // Load user if editing
  useEffect(() => {
    const fetchUser = async () => {
      if (isEditing) {
        try {
          const docRef = doc(db, "users", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setRegNo(data.regNo);
            setName(data.name);
            setEmail(data.email);
            setPhone(data.phone);
          } else {
            alert("User not found!");
            navigate("/users");
          }
        } catch (err) {
          console.error(err);
          alert("Error fetching user");
          navigate("/users");
        }
      } else {
        generateRegNo();
      }
    };
    fetchUser();
  }, [id, isEditing, navigate]); // ✅ include all used variables  

  // Generate registration number for new user
  const generateRegNo = async () => {
    try {
      const q = query(collection(db, "users"), orderBy("regNo", "desc"), limit(1));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const lastRegNo = snapshot.docs[0].data().regNo;
        setRegNo(lastRegNo + 1);
      } else {
        setRegNo(1001);
      }
    } catch(err) {
      console.error("Error generating regNo:", err);
      setRegNo(1001);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name.length < 3){ alert("Name must be at least 3 characters"); return; }
    if(!email.includes("@")){ alert("Invalid email"); return; }
    if(phone.length !== 10 || isNaN(phone)){ alert("Phone must be 10 digits"); return; }
  
    try {
      if(isEditing){
        const userRef = doc(db, "users", id);
        await updateDoc(userRef, { name, email, phone });
        setUsers(users.map(u => u.id === id ? { ...u, name, email, phone } : u));
        alert("User updated successfully!");
        navigate("/users"); // Go back after editing
      } else {
        const docRef = await addDoc(collection(db, "users"), { 
          regNo, name, email, phone, timestamp: new Date() 
        });
        setUsers([...users, { id: docRef.id, regNo, name, email, phone }]);
        alert(`Registration successful! Your Reg No is ${regNo}`);
        // Automatically navigate to users list after adding
        navigate("/users");
      }
  
      // Reset form (optional if navigating away)
      setName(''); setEmail(''); setPhone('');
  
    } catch(err) {
      console.error("Firestore Error:", err);
      alert("Error: " + err.message);
    }    
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-5 rounded-4" style={{ background: '#0f3057', color: '#fff' }}>
        <h2 className="card-title text-center mb-4 fw-bold">
          <FaUserPlus className="me-2 text-warning" />
          {isEditing ? "Edit Student" : "Register Student"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Registration Number</label>
            <input type="text" value={regNo} className="form-control styled-input" disabled />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control styled-input" placeholder="Enter full name" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control styled-input" placeholder="Enter email address" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Phone</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control styled-input" placeholder="Enter 10-digit phone number" />
          </div>
          <div className="text-center">
            <button type="submit" className={`btn btn-lg ${isEditing ? "btn-primary" : "btn-success"} shadow-lg px-5`}>
              {isEditing ? "Update Student" : "Register Student"}
            </button>
          </div>
        </form>
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
          .styled-input::placeholder { color: #b0c4de; }
          .styled-input:focus {
            background: #1b3b5a;
            color: #fff;
            border-color: #00bfff;
            box-shadow: 0 0 10px #00bfff;
            outline: none;
          }
          .styled-input:disabled {
            background: #1b3b5a !important;
            color: #fff !important;
            opacity: 1;
            cursor: not-allowed;
            border: 1px solid #00bfff;
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

export default Registration;
