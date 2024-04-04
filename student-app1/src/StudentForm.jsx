// StudentApp1/src/StudentForm.jsx
import React, { useState } from 'react';
import './index.css';
// Ensure the path to your CSS file is correct

const StudentForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ studentName, studentEmail, phoneNumber });
  };

  return (
    <div className="student-form-container">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <label className="student-form-label">Name:</label>
        <input
          className="student-form-input"
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <label className="student-form-label">Email:</label>
        <input
          className="student-form-input"
          type="email"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />
        <label className="student-form-label">Phone:</label>
        <input
          className="student-form-input"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="student-form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
