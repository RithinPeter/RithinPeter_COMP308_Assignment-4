// StudentApp1/src/App.jsx
import React from 'react';
import StudentForm from './StudentForm'; // Adjust the path as necessary

const App = () => {
  const handleFormSubmit = (studentData) => {
    console.log('Student Data:', studentData);
    // Here you would typically send this data to a backend server or handle it as needed.
  };

  return (
    <div className="app-container">
      <h1>StudentApp1</h1>
      <StudentForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
