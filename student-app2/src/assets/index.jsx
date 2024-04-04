import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

// Assuming there is a div with id 'root' in your index.html file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
