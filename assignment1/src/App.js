import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from './contact-form/ContactForm';
import Login from './login/login';
import UserDetail from './user-detail/UserDetail';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< ContactForm />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/user' element={< UserDetail />}></Route>
        </Routes>
      </Router>

    )
  }
}

