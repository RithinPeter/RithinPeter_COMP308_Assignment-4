// StudentApp2/src/App.jsx and StudentApp3/src/App.jsx
import React from 'react';
import StudentForm from '../../student-app1/src/StudentForm.jsx';
import './index.css'; 

const App = () => {
  const handleFormSubmit = (studentData) => {
    console.log('Student Data from App 3:', studentData);
   
  };

  return (
    <div className="app-container">
      <h1>StudentApp3</h1>
      <StudentForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
