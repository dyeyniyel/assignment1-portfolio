/*
File name: src/App.jsx
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 05/31/2024
*/

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import MainRouter from '../MainRouter'

//App component using BrowserRouter for routing
function App() {
  return (
    <Router>
      <MainRouter/>
    </Router>
  )
}

export default App
