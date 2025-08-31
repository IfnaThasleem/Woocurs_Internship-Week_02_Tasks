import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function UserList({ users, setUsers }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "regNo", direction: "asc" });
  const navigate = useNavigate();

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const userData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(userData);
      } catch (err) {
        console.error("Firestore Error:", err);
      }
    };
    fetchUsers();
  }, [setUsers]);

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteDoc(doc(db, "users", id));
        setUsers(users.filter(user => user.id !== id));
        alert("User deleted successfully!");
      } catch (err) {
        console.error("Firestore Error:", err);
        alert("Error deleting user");
      }
    }
  };

  // Navigate to Registration page for editing
  const handleEdit = (user) => {
    navigate(`/registration/${user.id}`);
  };

  // Filter users by search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.regNo.toString().includes(searchTerm)
  );

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aKey = a[sortConfig.key];
    let bKey = b[sortConfig.key];

    if (typeof aKey === "string") aKey = aKey.toLowerCase();
    if (typeof bKey === "string") bKey = bKey.toLowerCase();

    if (aKey < bKey) return sortConfig.direction === "asc" ? -1 : 1;
    if (aKey > bKey) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 rounded-4" style={{ background: '#0f3057', color: '#fff' }}>
        <h2 className="card-title text-center mb-4 fw-bold">
          <FaUsers className="me-2 text-warning" /> Registered Students
        </h2>

        <input
          type="text"
          placeholder="Search by Reg No, Name or Email"
          className="form-control mb-3 styled-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="table-responsive">
          <table className="table table-bordered table-hover text-white align-middle">
            <thead style={{ background: '#1b3b5a' }}>
              <tr>
                <th onClick={() => handleSort("regNo")} style={{ cursor: "pointer" }}>Reg No</th>
                <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>Name</th>
                <th onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>Email</th>
                <th onClick={() => handleSort("phone")} style={{ cursor: "pointer" }}>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.length > 0 ? sortedUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.regNo}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(user)}
                    >Edit</button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >Delete</button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="text-center">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inline CSS for inputs and table */}
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

          table th, table td {
            vertical-align: middle;
          }

          table tbody tr:hover {
            background: rgba(0,191,255,0.1);
          }
        `}
      </style>
    </div>
  );
}

export default UserList;
