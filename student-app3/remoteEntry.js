import { createApp } from 'vue'; // or import React from 'react'; depending on your framework
import StudentForm from '../../student-app1/src/StudentForm.jsx'; // Adjust the path as necessary

// Expose the StudentForm component
createApp({
  components: {
    StudentForm,
  },
}).mount('#StudentForm'); // Adjust the mount point as necessary
