// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #4caf50;
  }
`;

const AuthButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #4caf50;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: #45a049;
  }
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <NavContainer>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </NavContainer>

        <AuthButtonsContainer>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </AuthButtonsContainer>
      </AppContainer>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
